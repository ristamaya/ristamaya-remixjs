import { ActionFunction, json, LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { ThemeSelector } from "~/components/themeselector";
import { getThemeSession } from "~/models/theme.server";
import styles from "./tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ristamaya",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const currTheme = themeSession.getTheme();

  return json({ currTheme }, { headers: { "set-Cookie": await themeSession.commit() } });
};

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  let formData = await request.formData();
  let { theme } = Object.fromEntries(formData);

  themeSession.setTheme(String(theme));

  return json({ success: true }, { headers: { "Set-Cookie": await themeSession.commit() } });
};

export default function App() {
  let { currTheme } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className={currTheme}>
          <Outlet />

          <div id="ThemeSelector" className="absolute bottom-1 right-2 z-20">
            <ThemeSelector />
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
