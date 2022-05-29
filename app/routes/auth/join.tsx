import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { Button } from "~/components/formcontrol/button";
import { Input } from "~/components/formcontrol/input";
import { createUserSession, getUserId } from "~/models/session.server";
import { createUser, getUserByEmail } from "~/models/users.server";
import { validateEmail } from "~/models/utils.server";

interface ActionData {
  errors: {
    useremail?: string;
    password?: string;
    userpassword?: string;
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/core");
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const useremail = formData.get("useremail");
  const password = formData.get("password");
  const userpassword = formData.get("userpassword");
  const redirectTo = formData.get("redirectTo");

  if (!validateEmail(useremail)) {
    return json<ActionData>({ errors: { useremail: "Email is invalid" } }, { status: 400 });
  }

  if (typeof password !== "string") {
    return json<ActionData>({ errors: { password: "Password is required" } }, { status: 400 });
  }

  const existingUser = await getUserByEmail(useremail);
  if (existingUser) {
    return json<ActionData>({ errors: { useremail: "Email already exists" } }, { status: 400 });
  }

  if (password.length < 6) {
    return json<ActionData>({ errors: { password: "Too short" } }, { status: 400 });
  }

  if (userpassword != password) {
    return json<ActionData>({ errors: { userpassword: "Not Match" } }, { status: 400 });
  }

  const user = await createUser(useremail, userpassword);

  return createUserSession({
    request,
    userId: user.userid,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/core",
  });
};

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const userpasswordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.useremail) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    } else if (actionData?.errors?.userpassword) {
      userpasswordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div>
      <div className="mx-auto my-6 w-full max-w-sm rounded-md border border-theme-base/50 bg-theme-muted px-7 py-8 text-center shadow-lg">
        <h1 className="mb-10 text-xl font-semibold text-theme-base">Join To My Playground</h1>
        <Form method="post">
          <Input
            ref={emailRef}
            id="useremail"
            type="text"
            name="useremail"
            label="Email"
            autoComplete="new-useremail"
            className="w-full"
            errorMessage={actionData?.errors?.useremail}
          />
          <Input
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            label="Password"
            errorMessage={actionData?.errors?.password}
            className="w-full"
          />
          <Input
            ref={userpasswordRef}
            id="userpassword"
            type="password"
            name="userpassword"
            label="Retype Password"
            autoComplete="new-password"
            errorMessage={actionData?.errors?.userpassword}
            className="w-full"
          />

          <input type="hidden" name="redirectTo" value={redirectTo} />

          <Button type="submit" label="Join" className="w-28" />

          <h1 className="text-center text-sm text-theme-base">
            Or you can{" "}
            <Link to="/auth" className="text-theme-link hover:underline">
              Login
            </Link>
          </h1>
        </Form>
      </div>
    </div>
  );
}
