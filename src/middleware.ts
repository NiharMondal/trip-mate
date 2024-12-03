import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	if (isAuthenticated()) {
		return NextResponse.rewrite(request.url);
	}
	return NextResponse.redirect(new URL("/login", request.url));
}
 
export const config = {
	matcher: ["/dashboard/:path*"],
};
