import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    // 🚀 CTA Animation
    gsap.fromTo(
      ctaRef.current,
      { y: 100, opacity: 0 }, // start hidden below
      {
        y: 0,
        opacity: 1,
        duration: .8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 65%", // when CTA is 80% down viewport
          toggleActions: "play none none reverse", // animate in, reverse on scroll up
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="home" className="hero-container">
      <div className="hero-content">
        <div className="hero-title">
          THE <br /> ORIGINAL <br /> DEEP DIVING <br /> POOL
        </div>
        {/* attach ref for GSAP */}
        <div className="ctaButtons" ref={ctaRef}>
          <a className="cta">Réserver un baptême</a>
          <a className="cta">Découvrir nos activités</a>
          <a className="cta">Webshop</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
