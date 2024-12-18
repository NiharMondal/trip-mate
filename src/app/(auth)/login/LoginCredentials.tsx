import { Menu, MenuButton, MenuItems } from "@headlessui/react";

export default function LoginCredentials() {
	return (
		<div className="absolute top-4 right-4">
			<Menu>
				<MenuButton className="border border-primary p-2 rounded-md shadow-lg text-primary font-bold tracking-wider text-sm">
					See Credentials?
				</MenuButton>
				<MenuItems anchor="bottom start" className="bg-white z-10">
					<div className="p-2">
						<h4 className="font-medium text-lg font-mono">
							Admin Credentials
						</h4>
						<p className="text-sm tracking-wider font-medium">
							Email: david@gmail.com
						</p>
						<p className="text-sm tracking-wider font-medium">
							Password: 123456
						</p>
					</div>
					<div className="p-2 border-t">
						<h4 className="font-medium text-lg font-mono">
							User Credentials
						</h4>
						<p className="text-sm tracking-wider font-medium">
							Email: john@gmail.com
						</p>
						<p className="text-sm tracking-wider font-medium">
							Password: 123456
						</p>
					</div>
				</MenuItems>
			</Menu>
		</div>
	);
}
