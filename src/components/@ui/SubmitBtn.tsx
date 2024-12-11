import React from "react";

interface ISubmitBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	loading?: boolean;
	className?: string;
}
export default function SubmitBtn({
	children,
	loading,
	className,
	...props
}: ISubmitBtnProps) {
	return (
		<button
			{...props}
			className={`mt-5 btn border text-white border-secondary shadow-lg flex items-center justify-center ${
				loading ? "opacity-50 cursor-not-allowed" : ""
			} ${className}`}
			disabled={loading}
			type="submit"
		>
			<span className="mr-2">
				{loading && (
					<svg
						className="animate-spin h-5 w-5 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 01-8 8z"
						></path>
					</svg>
				)}
			</span>
			{children}
		</button>
	);
}
