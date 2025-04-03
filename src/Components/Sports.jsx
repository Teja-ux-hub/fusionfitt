import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sports = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          markers: false,
        },
      });
      tl.to(".image-container img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      }).to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert(); // Clean up GSAP context when component unmounts
    };
  }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
        className="wrapper"
        style={{ position: "relative", width: "100%", zIndex: 1 }}
      >
        <div className="content" style={{ overflowX: "hidden", width: "100%" }}>
          <section
            className="section hero"
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></section>
          <section
            className="section gradient-purple"
            style={{ width: "100%", height: "100vh", backgroundColor: "#9b59b6" }}
          ></section>
          <section
            className="section gradient-blue"
            style={{ width: "100%", height: "100vh", backgroundColor: "#3498db" }}
          ></section>
          <section
            className="section gradient-green"
            style={{ width: "100%", height: "100vh", backgroundColor: "#2ecc71" }}
          ></section>
        </div>
        <div
          className="image-container"
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            perspective: "500px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
            alt="Scroll animation"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
      </div>
    </div>
  );z
};

export default Sports;
