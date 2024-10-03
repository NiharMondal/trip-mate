import Link from 'next/link';
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

type LinkButtonProps = {
    href:string;
    title: string;
}

export default function LinkButton({href, title}:LinkButtonProps) {
  return (
		<p className="mx-auto max-w-fit border-b-2 border-gray-300 hover:border-primary duration-150 href mt-7">
			<Link
				href={`${href}`}
				className="inline-flex items-center gap-x-3"
			>
				{title}
				<span>
					
					<FaLongArrowAltRight />
				</span>
			</Link>
		</p>
  );
}
