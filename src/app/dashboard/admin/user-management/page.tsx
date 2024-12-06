"use client";
import TMLoading from "@/components/shared/TMLoading";
import TMNoData from "@/components/shared/TMNoData";
import TMTable from "@/components/shared/TMTable";
import { useDeleteUserMutation, useGetAllUserQuery } from "@/redux/api/user.api";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

// Define the row type
type TUser = {
	_id: string;
	name: string;
	email: string;
	role: string;
	trips: string[];
};
export default function AdminUserManagement() {
	const { data: users, isLoading } = useGetAllUserQuery({});

	const [deleteUser] = useDeleteUserMutation()

	const handleDelete = async (id: string) => {
		try {
			const res = await deleteUser(id).unwrap();
			if (res.success) {
				toast.success("User deleted successfully");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message);
		}
	};



	if (isLoading) return <TMLoading />;

	const columns = [
		{ header: "Name", accessor: "name" },
		{ header: "Email", accessor: "email" },
		{ header: "Role", accessor: "role" },
		{
			header: "Actions",
			render: (user: TUser) => (
				<span
					title="Delete User"
					onClick={() => handleDelete(user._id)}
				>
					<RiDeleteBin2Fill className="size-5 text-red-500 hover:text-red-600 cursor-pointer" />
				</span>
			),
		},
	];

	return (
		<div>
			{!users?.result?.length ? (
				<TMNoData />
			) : (
				<TMTable
					columns={columns as []}
					data={users?.result}
					keyField={"_id"}
				/>
			)}
		</div>
	);
}
