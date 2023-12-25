"use client";
import React from "react";
import { Card } from "./card";
import { useState } from "react";
import { imageArray } from "../lib/utility";

function CardContianer({ villains }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  villains.forEach((el) => {
    if (!imageArray.includes(el.image.closeup)) {
      imageArray.push(el.image.closeup);
    }
  });

  const handleNext = function () {
    if (currentSlide === imageArray.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  //   setTimeout(() => {
  //     handleNext();
  //   }, 4000);
  const handlePrevious = function () {
    if (currentSlide === 0) {
      setCurrentSlide(imageArray.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="slider-wrapper">
        <div className="slider-buttons">
          <button className="btn-slider-left" onClick={handlePrevious}>
            Previous
          </button>
          <button className="btn-slider-left" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="slider-container">
          {villains.map((vil, i) => {
            return (
              <Card
                key={vil.name}
                vil={vil}
                currentSlide={currentSlide}
                i={i}
                setCurrentSlide={setCurrentSlide}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardContianer;
