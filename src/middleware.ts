import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "./helpers/decodeToken";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const cookie = request.cookies.get("tm")?.value;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const user: any = decodeToken(cookie as string);

	if (!cookie && path.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (cookie && path === "/login") {
		if (user?.role === "admin" || "superadmin") {
			return NextResponse.redirect(
				new URL("/dashboard/admin", request.url)
			);
		} else {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
	}
	
	if (cookie && user?.role === "admin" && path === "/dashboard") {
		return NextResponse.redirect(new URL("/", request.url));
	}
	if (cookie && user?.role === "user" && path === "/dashboard/admin") {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/login"],
};
