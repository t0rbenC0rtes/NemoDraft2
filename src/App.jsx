import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";
import VideoBackground from "./components/VideoBackground";
import Sites from "./components/Sites";
import Activities from "./components/Activities";
import Restaurant from "./components/Restaurant";
import Webshop from "./components/Webshop";
import Events from "./components/Events";
import Contact from "./components/Contact";

const App = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="main-container">
			<VideoBackground />
			<Hero />
			<Sites />
			<Activities />
			<Restaurant />
			<Webshop />
			<Events />
			<Contact />
			{windowWidth >= 900 ? <Navbar /> : <Hamburger />}
		</div>
	);
};

export default App;
