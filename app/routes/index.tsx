import { LoaderFunction, redirect } from "@remix-run/node";
import { SetVisitor } from "~/models/visitors.server";

export const loader: LoaderFunction = async ({ request }) => {
  const response = await fetch("https://geolocation-db.com/json");
  if (response) await SetVisitor(request, await response.json());

  return redirect("/home");
};
