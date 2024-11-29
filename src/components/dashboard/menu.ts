type TRoute = {
    label:string;
    path: string;
}
type TMenuItems = {
    user: TRoute[];
    admin: TRoute[]
}
export const MENU_ITEMS: TMenuItems = {
	user: [
		{ label: "Dashboard", path: "/dashboard" },
		{ label: "My Trips List", path: "/dashboard/user/trips" },
		{
			label: "Incoming Request",
			path: "/dashboard/user/incoming-requests",
		},
		{
			label: "Outgoing Request",
			path: "/dashboard/user/outgoing-requests",
		},
	],
	admin: [
		{ label: "Dashboard", path: "/dashboard/admin/dashboard" },
		{ label: "Manage Trips", path: "/dashboard/admin/manage-trips" },
		{ label: "User Management", path: "/dashboard/admin/user-management" },
		{ label: "Reports", path: "/dashboard/admin/reports" },
	],
};

export const COMMON_ITEMS : TRoute[]= [
    {
        label: "Change Password",
        path:"/dashboard/change-password"
    }
]
