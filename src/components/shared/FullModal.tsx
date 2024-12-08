import { Dialog, DialogPanel } from "@headlessui/react";
import React from "react";

type FullModalProps = {
	isOpen: boolean;

	close: () => void;
	children: React.ReactNode;
};

export default function FullModal({ isOpen, children, close }: FullModalProps) {
	return (
		<>
			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10 focus:outline-none"
				onClose={close}
			>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex items-center justify-center p-5 min-w-full min-h-screen">
						<DialogPanel
							transition
							className="w-full sm:min-w-[500px] md:min-w-[700px] min-h-[600px] max-w-md rounded-xl bg-primary  p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
						>
							{children}
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
}
