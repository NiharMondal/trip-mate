"use server";

import { cookies } from "next/headers";

export const userLogout = () => {
	try {
		cookies().delete("tm");
	} catch (error) {
		console.log(error);
		return "Something went wrong!";
	}
};
