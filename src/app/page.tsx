import Banner from "@/components/home/Banner";
import HighlightSection from "@/components/home/HighlightSection";
import PopularTour from "@/components/home/PopularTour";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import TopDestination from "@/components/home/TopDestination";
import WebsiteOverview from "@/components/home/WebsiteOverview";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

//Home page  meta data

export default function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			<TopDestination />
			<PopularTour />
			<RecentlyAdded />
			<HighlightSection />
			<WebsiteOverview />
			<Footer />
		</>
	);
}
