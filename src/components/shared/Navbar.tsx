"use client";
import React, { useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../@ui/Logo";

export default function Navbar() {
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
	return (
		<header className="border border-primary ">
			<nav className="flex items-center justify-between w-full relative ">
				<Logo />
				<ul className="hidden lg:flex items-center gap-[20px] text-[1rem] text-text ">
					<li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize">
						home
					</li>
					<li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize">
						about us
					</li>
					<li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize">
						services
					</li>
				</ul>

				<div className="flex items-center gap-[10px]">
					<div className="relative lg:flex hidden">
						<input
							className="py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary"
							placeholder="Search..."
						/>
						<IoIosSearch className="absolute top-[9px] left-3 text-text text-[1.3rem]" />
					</div>

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
					} lg:hidden bg-primary p-4 text-center fixed top-0 right-0 h-screen w-full sm:w-[330px] transition-all duration-300 overflow-hidden`}
				>
					<div className="w-full relative mb-5">
						<input
							className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-primary"
							placeholder="Search..."
						/>
						<IoIosSearch className="absolute top-[9px] left-5 text-text text-[1.3rem]" />
					</div>
					<ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
						<li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
							home
						</li>
						<li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">
							about us
						</li>
						<li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
							services
						</li>
					</ul>
				</aside>
			</nav>
		</header>
	);
}
