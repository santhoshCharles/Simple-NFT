import { getItem } from "../utils/SessionStorage";
import { NextResponse } from "next/server";

const signedinPages = ["/Dashboard", "/Artists", "/Genres", "/ProfilePage"];

export function middleware(req, ev) {
  if (signedinPages.find((url) => url === req.nextUrl.pathname)) {
    if (!req.cookies.token) {
      const url = req.nextUrl.clone();
      url.pathname = "/Login";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }
}
