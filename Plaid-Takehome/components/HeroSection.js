import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { backendFeaturesData, frontEndData } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useEffect(() => {
    // Animate each letter of "Front End" upwards and move it out of the container one by one
    gsap.to(".front-end-title span", {
      scrollTrigger: {
        trigger: ".back-end-accordion", // Trigger when the back-end accordion comes into view
        start: "top 30%",
        end: "top 10%",
        scrub:1.5,
      },
      y: "-200%",
      stagger: 0.05, // Stagger the animation for each letter (0.05 second delay)
      ease: "power1.out", // Helps us ease out for a smooth movement
    });

    // Animate each letter of "Back End" to slide up into view one by one
    gsap.from(".back-end-title span", {
      scrollTrigger: {
        trigger: ".back-end-accordion", // Same trigger for smooth interaction
        start: "top 30%",
        end: "top 10%",
        scrub:  1,
      },
      y: "300%", // Starts each letter from below the container
      stagger: 0.2, // Stagger the sliding up effect for each letter
      ease: "power1.out", // Ease out for a smooth sliding effect
    });

    // This forces a ScrollTrigger calculation refresh after page load
    ScrollTrigger.refresh();
  }, []);


  const [openIndex, setOpenIndex] = useState(null); // State toggle for open and closed accordion

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // This toggles the selected index
  };

  return (
    <section className="hero">
      <div className="layout-container">
        <div className="animation-container">

          {/* "Front End" letters */}
          <h1 className="hero-title front-end-title">
            <div className="test">
                <span>F</span><span>R</span><span>O</span><span>N</span><span>T</span>
            </div>

            <div className="text">END</div>
          </h1>

          {/* "Back End" letters */}
          <h1 className="hero-title back-end-title">
            <div className="test">
                <span>B</span><span>A</span><span>C</span><span>K</span>
            </div>
            <div className="text">END</div>
          </h1>
          <h2 className="hero-number">01</h2>
        </div>
      </div>

      <div className="accordions">
        <div className="front-end-accordion">
          {frontEndData.map((feature, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => handleToggle(index)}
              >
                <h3>{feature.title}</h3>
              </div>

              {openIndex === index && (
                <div
                  className={`accordion-content ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  <p>{feature.content}</p>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
        <div className="back-end-accordion">
          {backendFeaturesData.map((feature, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => handleToggle(index)}
              >
                <h3 className="">{feature.title}</h3>
              </div>

              {openIndex === index && (
                <div className="accordion-content">
                  <p>{feature.content}</p>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
