
import React from 'react';


type SvgProps = {
    fill?:string;
    position?:string
}
export default function TMSvg({ fill = "#fce7f3", position = "top-0" }: SvgProps) {
	return (
		<svg
			className={`-z-10 absolute left-0 right-0 ${position && position}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
		>
			<path
				fill={fill}
				fillOpacity="1"
				d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,122.7C672,139,768,213,864,250.7C960,288,1056,288,1152,282.7C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
			></path>
		</svg>
	);
}
