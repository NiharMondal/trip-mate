import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	
	const path = request.nextUrl.pathname;
	const cookie = request.cookies.get("tm")?.value;

	if (!cookie && path === "/dashboard") {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (cookie && path === "/login") {
		
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*","/login"],
};
