"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import UserPopover from "./Popover";
import useFetchUser from "@/lib/loadUser";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { imageHelpers } from "@/assets/image-helpers";
import { helpers } from "@/helpers";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
	const { user } = useFetchUser();
	const [isOpen, setIsOpen] = useState(false);
	const open = () => {
		setIsOpen(true);
	};
	const close = () => {
		setIsOpen(false);
	};
	return (
		<header className="px-5 sm:px-10 lg:px-28 border-b">
			<nav className="flex items-center justify-between w-full relative py-5">
				<CiMenuFries
					className="text-[1.6rem] text-text cursor-pointer lg:hidden flex"
					onClick={open}
				/>

				<Link href="/">
					<Image
						src={imageHelpers.logo}
						alt="logo"
						className="size-[60px]"
					/>
				</Link>
				<ul className="hidden lg:flex items-center gap-[20px] text-[1rem] text-text">
					{helpers.navlinks.map((nav) => (
						<li key={nav.name}>
							<Link
								href={nav.path}
								className="nav-link-style geist-sans"
							>
								{nav.name}
							</Link>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-[10px]">
					{!user?.id ? (
						<Link href="/login" className="btn btn-primary">
							<button className="text-sm text-white">
								Login
							</button>
						</Link>
					) : (
						<UserPopover />
					)}
				</div>

				<Dialog
					open={isOpen}
					onClose={close}
					className="relative z-50 "
					as="div"
				>
					<aside className="fixed inset-0 z-10 w-screen">
						<div
							className={`absolute top-0 left-0 w-full sm:w-[350px] bg-accent`}
						>
							<DialogPanel className="text-white w-full h-screen ">
								<div className="flex items-center justify-end pb-10 pt-3 pr-1">
									<IoMdClose
										onClick={close}
										className="text-text text-[1.8rem] cursor-pointer"
									/>
								</div>

								<ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col mb-20">
									{helpers.navlinks.map((nav) => (
										<li key={nav.name}>
											<Link
												href={nav.path}
												onClick={close}
												className="nav-link-style geist-sans text-text"
											>
												{nav.name}
											</Link>
										</li>
									))}
								</ul>
							</DialogPanel>
						</div>
					</aside>
				</Dialog>
			</nav>
		</header>
	);
}
