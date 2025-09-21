import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/navbar.css";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setShowNavbar(currentScrollY < lastScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<motion.div
			className="navbar"
			initial={{ y: 0 }}
			animate={{ y: showNavbar ? 0 : -100 }}
			transition={{ duration: 0.6 }}
			style={{
				position: "fixed",
				top: 10,
				justifySelf: "center",
				zIndex: 1000,
			}}
		>
			{" "}
			<div className="navbarContent">
				<div>
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('accueil'); }}>
						<img
							className="logo"
							src="../img/NemoLogo.png"
							alt="Logo"
						/>
					</a>
				</div>
				<div className="navbarLinks">
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Accueil</a>
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('sites'); }}>Sites</a>
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('activites'); }}>Activités</a>
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('restaurant'); }}>Restaurant</a>
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('webshop'); }}>Webshop</a>
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('evenements'); }}>Événements</a>
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
