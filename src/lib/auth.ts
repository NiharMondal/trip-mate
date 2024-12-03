import { cookies } from "next/headers"

export const isAuthenticated = ()=> {
    const cookie = cookies().get("tm");
    return cookie
}