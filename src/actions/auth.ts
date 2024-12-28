"use server";

import { envConfig } from "@/config";
import { cookies } from "next/headers";

export const userLogout = () => {
	try {
		cookies().delete("tm");
	} catch (error) {
		console.log(error);
		return "Something went wrong!";
	}
};

export const setCookie = (token: string) => {
	try {
		cookies().set("tm", token, {
			secure: envConfig.node_env === "production" ? true : false,
			httpOnly: envConfig.node_env === "production" ? true : false,
			sameSite: "lax",
			maxAge: 60 * 60 * 24 * 3,
			path: "/",
		});
	} catch (error) {
		console.log(error);
	}
};
