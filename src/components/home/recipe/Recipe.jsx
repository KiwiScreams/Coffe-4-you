import "./Recipe.css";
import image from "../../../assets/images/recipe1.png";
import { useEffect, useState } from "react";
import React from "react";
const Recipe = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const textContainerRef = React.createRef();

  React.useEffect(() => {
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

    observer.observe(textContainerRef.current);

    return () => {
      observer.unobserve(textContainerRef.current);
    };
  }, []);

  return (
    <>
      <section className="recipe-container">
        <div className="image-container">
          <img src={image} alt="" />
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
