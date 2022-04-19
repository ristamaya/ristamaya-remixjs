import { createCookieSessionStorage, json } from "@remix-run/node";
import { prisma } from "prisma/db.connect";
import invariant from "tiny-invariant";

invariant(process.env.VISITOR_KEY, "SESSION_SECRET must be set");

export const visitorCookie = createCookieSessionStorage({
  cookie: {
    name: "__visitor",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.VISITOR_KEY],
    secure: process.env.NODE_ENV === "production",
  },
});

const VISITOR_SESSION_KEY = "IPv4";

export async function getVisitorSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return visitorCookie.getSession(cookie);
}

export async function setVisitorSession({ request, ip }: { request: Request; ip: string }) {
  const session = await getVisitorSession(request);
  session.set(VISITOR_SESSION_KEY, ip);
  await visitorCookie.commitSession(session, {
    maxAge: 60 * 60 * 30,
  });
}

export async function getVisitor(request: Request): Promise<string | undefined> {
  const session = await getVisitorSession(request);
  const userId = session.get(VISITOR_SESSION_KEY);
  return userId;
}

interface logData {
  country_code: string;
  country_name: string;
  city: string;
  postal: string;
  latitude: string;
  longitude: string;
  IPv4: string;
  state: string;
}

export async function SetVisitor(request: Request, param: logData) {
  const visitor = await getVisitor(request);
  if (!visitor) {
    const addVisitor = await prisma.visitors.create({
      data: {
        country_code: param.country_code,
        country_name: param.country_name,
        city: param.city,
        postal: param.postal,
        latitude: param.latitude.toString(),
        longitude: param.longitude.toString(),
        IPv4: param.IPv4,
        state: param.state,
      },
    });

    const session = await getVisitorSession(request);
    session.set(VISITOR_SESSION_KEY, param.IPv4);

    return json(addVisitor, {
      headers: {
        "Set-Cookie": await visitorCookie.commitSession(session, {
          maxAge: 60 * 30,
        }),
      },
    });
  }

  return json({});
}
