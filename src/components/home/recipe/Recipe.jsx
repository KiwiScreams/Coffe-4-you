import "./Recipe.css";
import image from "../../../assets/images/recipe1.png";
import { useState, useRef, useLayoutEffect } from "react";
import React from "react";
const Recipe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textContainerRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (textContainerRef.current) {
      observer.observe(textContainerRef.current);
    }

    return () => {
      if (textContainerRef.current) {
        observer.unobserve(textContainerRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (isVisible) {
      imageRef.current.classList.add("animate-image");
    } else {
      imageRef.current.classList.remove("animate-image");
    }
  }, [isVisible]);

  return (
    <>
      <section className="recipe-container">
        <div className="image-container">
          <img ref={imageRef} src={image} alt="" className="image" />
        </div>
        <div
          ref={textContainerRef}
          className={`text-container ${isVisible ? "animate" : ""}`}
        >
          <h3>Chocolate cake</h3>
          <div className="text">
            <p>
              From its humble beginnings, it has evolved into a symbol of
              indulgence and celebration, cherished worldwide for its rich,
              velvety texture and irresistible flavor. It has been perfected and
              adapted by various cultures, each adding its own unique touch to
              this beloved dessert. Today, chocolate cake stands as a timeless
              classic.
            </p>
            <ol>
              <li>Unsweetened cocoa powder</li>
              <li>Baking soda</li>
              <li>Salt</li>
              <li>Granulated sugar</li>
              <li>Eggs</li>
              <li>Milk or buttermilk</li>
              <li>Melted butter</li>
              <li>Vanilla extract</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
