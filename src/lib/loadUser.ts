

import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";
import { useState, useEffect } from "react";

const useFetchUser = () => {
	const [user, setUser] = useState<ReturnType<typeof selectedUser> | null>(
		null
	);
	const [loading, setLoading] = useState(false);
	const reduxUser = useAppSelector(selectedUser);

	useEffect(() => {
		setLoading(true); // Start loading
		setUser(reduxUser);
		setLoading(false); // Stop loading
	}, [reduxUser]);

	return { user, loading }; // Return both user and loading states
};

export default useFetchUser;
