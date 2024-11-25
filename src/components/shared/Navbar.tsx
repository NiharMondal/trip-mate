"use client";
import React, { useState } from "react";

// react icons
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

import { helpers } from "@/helpers";
import Link from "next/link";
import Image from "next/image";
import { imageHelpers } from "@/assets/image-helpers";

export default function Navbar() {
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	return (
		<header className="px-5 sm:px-10 lg:px-28 border">
			<nav className="flex items-center justify-between w-full relative py-5">
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
					<Link
						href="/login"
						className="btn btn-primary hidden lg:flex"
					>
						<button className="text-sm text-white">Login</button>
					</Link>

					<CiMenuFries
						className="text-[1.6rem] text-text cursor-pointer lg:hidden flex"
						onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
					/>
				</div>

				
				{/** for small device */}
				<aside
					className={` ${
						mobileSidebarOpen
							? "translate-x-0 opacity-100 z-50"
							: "translate-x-full opacity-0 z-[-1]"
					} lg:hidden bg-accent p-4 text-center fixed top-0 right-0 h-screen w-full sm:w-[330px] transition-all duration-300 overflow-hidden`}
				>
					<div className="flex items-center justify-end pb-10 pt-3 pr-1">
						<IoMdClose
							onClick={() =>
								setMobileSidebarOpen(!mobileSidebarOpen)
							}
							className="text-text text-[1.8rem] cursor-pointer"
						/>
					</div>

					<ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col mb-20">
						{helpers.navlinks.map((nav) => (
							<li key={nav.name}>
								<Link
									href={nav.path}
									className="nav-link-style geist-sans text-text"
								>
									{nav.name}
								</Link>
							</li>
						))}
					</ul>
					<div>
						<Link href="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
					</div>
				</aside>
			</nav>
		</header>
	);
}
