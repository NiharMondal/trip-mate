"use client";
import React, { useState } from "react";

// react icons
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../@ui/Logo";
import { helpers } from "@/helpers";
import Link from "next/link";

export default function Navbar() {
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	return (
		<header className="px-5 sm:px-10 lg:px-28">
			<nav className="flex items-center justify-between w-full relative ">
				<Logo />
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
					<button className="btn btn-primary hidden lg:flex">
						<Link href="/login" className="text-sm">
							Login
						</Link>
					</button>

					<CiMenuFries
						className="text-[1.6rem] text-text cursor-pointer lg:hidden flex"
						onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
					/>
				</div>

				<aside
					className={` ${
						mobileSidebarOpen
							? "translate-x-0 opacity-100 z-50"
							: "translate-x-full opacity-0 z-[-1]"
					} lg:hidden bg-secondary p-4 text-center fixed top-0 right-0 h-screen w-full sm:w-[330px] transition-all duration-300 overflow-hidden`}
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
						<button className="btn btn-primary">
							<Link href="/login">Login</Link>
						</button>
					</div>
				</aside>
			</nav>
		</header>
	);
}
