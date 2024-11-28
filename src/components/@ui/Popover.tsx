import { imageHelpers } from "@/assets/image-helpers";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";

export default function UserPopover() {
	return (
		<Popover className="relative ">
			<PopoverButton className="outline-none">
				<Image
					src={imageHelpers.logo}
					height={60}
					width={60}
					alt="user-avatar"
					className="w-full h-full object-cover object-center z-10"
				/>
			</PopoverButton>
			<PopoverPanel anchor="bottom end" className="flex flex-col p-5 bg-white w-60 rounded border">
				<a href="/analytics">Analytics</a>
				<a href="/engagement">Engagement</a>
				<a href="/security">Security</a>
				<a href="/integrations">Integrations</a>
			</PopoverPanel>
		</Popover>
	);
}
