import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1>H1. Hello World</h1>
			<h2>H2. Hello World</h2>
			<h3 className="heading">
				H3. Hello World
			</h3>
			<h4>H4. Hello World</h4>
			<h5>H5. Hello World</h5>
			<h6>H6. Hello World</h6>
			<p className="font-medium">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci commodi cupiditate fugiat ducimus provident nostrum
				odit facere ipsam corrupti autem dolorem ipsum, reiciendis unde
				explicabo voluptate veniam voluptas illum aperiam? Quos harum
				ducimus voluptates alias repellendus. Iure vitae fuga eligendi
				at perspiciatis, ipsum, ipsam officiis nemo voluptatem,
				voluptatibus sequi. Commodi!
			</p>
			<div className="h-screen">
        <a href="" className="link">Link</a>
      </div>
		</div>
	);
}
