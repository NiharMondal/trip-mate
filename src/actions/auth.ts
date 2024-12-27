"use server";

import { envConfig } from "@/config";
import { cookies } from "next/headers";

export const userLogin = async (formData: FormData) => {
	const credentials = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	const res = await fetch(`${envConfig.backend_url}/auth/login`, {
		method: "POST",
		body: JSON.stringify(credentials),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		return { success: false, message: "Invalid credentials" };
	}
	const data = await res.json();

	cookies().set("tm", data?.result?.accessToken, {
		secure: process.env.NODE_ENV ? true : false,
		httpOnly: process.env.NODE_ENV ? true : false,
		sameSite: "lax",
		maxAge: 60 * 60 * 24 * 3,
		path: "/",
	});

	return data;
};

export const userLogout = () => {
	try {
		cookies().delete("tm");
	} catch (error) {
		console.log(error);
		return "Something went wrong!";
	}
};
