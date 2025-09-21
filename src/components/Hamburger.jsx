import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "../styles/hamburger.css";

const Hamburger = () => {
	const [showHamburger, setShowHamburger] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setShowHamburger(currentScrollY < lastScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
		closeMenu(); // Close menu after scrolling
	};

	return (
		<>
			<motion.div
				className="hamburger-header"
				initial={{ y: 0 }}
				animate={{ y: showHamburger ? 0 : -100 }}
				transition={{ duration: 0.6 }}
				style={{
					position: "fixed",
					top: 10,
					left: 10,
					zIndex: 1001,
				}}
			>
				<div className="hamburger-content">
					<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('accueil'); }}>
						<img
							className="hamburger-logo"
							src="../img/NemoLogo.png"
							alt="Logo"
						/>
					</a>
					<button
						className="hamburger-button"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isOpen ? <IoMdClose size={24} /> : <RxDropdownMenu size={24} />}
					</button>
				</div>
			</motion.div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="hamburger-menu"
						initial={{ opacity: 0, y: -60 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -60 }}
						transition={{ duration: 0.3 }}
						style={{
							position: "fixed",
							top: 80,						
							right: "4%",
							zIndex: 1000,
						}}
					>
						<nav className="hamburger-nav">
							<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('accueil'); }}>Accueil</a>
							<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('sites'); }}>Sites</a>
							<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('activites'); }}>Activités</a>
							<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('restaurant'); }}>Restaurant</a>
							<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('webshop'); }}>Webshop</a>
							<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('evenements'); }}>Événements</a>
							<a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Hamburger;