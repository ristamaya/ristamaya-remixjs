import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { useState } from "react";
import { ThemeSelector } from "./components/themeselector";
import styles from "./tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ristamaya",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [theme, setTheme] = useState("");

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className={theme}>
          <Outlet />
          <div id="ThemeSelector" className="absolute bottom-1 right-2 z-20">
            <ThemeSelector theme={setTheme} />
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
