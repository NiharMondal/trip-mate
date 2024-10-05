import { assets } from '@/assets/image'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
		<footer className="bg-gray-900 py-20 px-5 sm:px-20 md:px-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white gap-8">
				<div>
					<Image
						src={assets.logo}
						width={150}
						height={150}
						alt="logo"
					/>
                    <p className='heading text-2xl'>Voyage Vibe</p>
				</div>
				<div>
					<h3 className="heading">Contact</h3>
					<div className="mt-6 space-y-3">
						<p>
							Telephone:{" "}
							<span className="text-gray-500">1-837-373-37</span>
						</p>
						<p>
							Email:{" "}
							<a
								className="text-gray-500"
								href="mailto:developernihar@gmail.com"
							>
								contact@traveltourtheme.co
							</a>
						</p>
					</div>
				</div>
				<div>
					<h3 className="heading">Useful Links</h3>
					<ul className="mt-6 space-y-3">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/blog">Blog</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="heading">Pay Safely with us</h3>
					<div className="mt-6 space-y-3">
						<p>
							The payment is encrypted and transmitted securely
							with an SSL protocol.
						</p>
					</div>
				</div>
			</div>
		</footer>
  );
}
