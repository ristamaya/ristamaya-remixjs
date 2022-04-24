import { ActionFunction, json, LoaderFunction, MetaFunction, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { Button } from "~/components/formcontrol/button";
import { Input } from "~/components/formcontrol/input";
import { createUserSession, getUserId } from "~/models/session.server";
import { verifyLogin } from "~/models/users.server";
import { validateEmail } from "~/models/utils.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/core");
  return json({});
};

interface ActionData {
  errors?: {
    email?: string;
    password?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json<ActionData>({ errors: { email: "Invalid email" } }, { status: 400 });
  }

  if (typeof password !== "string") {
    return json<ActionData>({ errors: { password: "Require password" } }, { status: 400 });
  }

  if (password.length < 8) {
    return json<ActionData>({ errors: { password: "It's too short" } }, { status: 400 });
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    return json<ActionData>({ errors: { email: "Invalid email or password" } }, { status: 400 });
  }

  return createUserSession({
    request,
    userId: user.userid,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/core",
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Ristamaya | Login",
  };
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/core";
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="mx-auto my-6 w-full max-w-sm rounded-md border border-theme-base/50 bg-theme-muted px-7 py-8 text-center shadow-lg">
      <h1 className="mb-10 text-xl font-semibold text-theme-base">Join To My Experiment</h1>

      <Form method="post">
        <Input
          label="Email Address"
          ref={emailRef}
          id="email"
          required
          autoFocus={true}
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={actionData?.errors?.email ? true : undefined}
          aria-describedby="email-error"
          className="w-full"
        />
        {actionData?.errors?.email && (
          <div className="pt-1 text-red-700" id="email-error">
            {actionData.errors.email}
          </div>
        )}

        <Input
          label="Password"
          id="password"
          ref={passwordRef}
          name="password"
          type="password"
          autoComplete="new-password"
          aria-invalid={actionData?.errors?.password ? true : undefined}
          aria-describedby="password-error"
          className="w-full"
        />
        {actionData?.errors?.password && (
          <div className="pt-1 text-red-700" id="password-error">
            {actionData.errors.password}
          </div>
        )}

        <input type="hidden" name="redirectTo" value={redirectTo} />

        <Button label="Login" className="w-28" type="submit"></Button>

        <h1 className="text-center text-sm text-theme-base">
          Want to create an account?{" "}
          <Link to="/auth/join" className="text-theme-link hover:underline">
            Join
          </Link>
        </h1>
      </Form>
    </div>
  );
}
