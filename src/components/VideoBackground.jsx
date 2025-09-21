import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let rafId;

    // Video scrubbing function
    const updateVideo = () => {
      if (video.readyState >= 2) {
        video.currentTime = targetTime;
      }
      rafId = requestAnimationFrame(updateVideo);
    };

    const setupScrollTrigger = () => {
      if (!video.duration) return;

      // Create scroll trigger for the entire document
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          targetTime = self.progress * video.duration;
        },
        // markers: true, // uncomment for debugging
      });

      updateVideo();
    };

    const handleLoadedMetadata = () => {
      setupScrollTrigger();
    };

    if (video.readyState >= 1) {
      setupScrollTrigger();
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="video-background"
      src="/vid/heroDiverLoop.mp4"
      muted
      playsInline
      preload="auto"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(180deg)",
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default VideoBackground;
