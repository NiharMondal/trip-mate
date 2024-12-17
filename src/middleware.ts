import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "./helpers/decodeToken";

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	// Get cookie
	const cookie = request.cookies.get("tm")?.value;

	// Validate cookie before decoding
	if (!cookie) {
		if (path.startsWith("/dashboard")) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
		return NextResponse.next();
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let user: any;
	try {
		user = decodeToken(cookie); // Safely decode the token
	} catch (error) {
		// If decoding fails, redirect to login
		console.error("Token decoding failed:", error);
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// Redirect login users
	if (path === "/login") {
		if (user?.role === "admin") {
			return NextResponse.redirect(
				new URL("/dashboard/admin", request.url)
			);
		} else {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
	}

	// Role-based protection
	if (user?.role === "admin" && path === "/dashboard") {
		return NextResponse.redirect(new URL("/", request.url));
	}
	if (user?.role === "user" && path === "/dashboard/admin") {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/login"],
};
