import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };
  const handleClickPrev = () => {
    setIndex((prev) => {
      const nextInd = prev - 1;
      return checkNumber(nextInd);
    });
  };

  const handleClickNext = () => {
    setIndex((prev) => {
      const nextInd = prev + 1;
      return checkNumber(nextInd);
    });
  };

  const randomShow = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random += 1;
    }
    setIndex(checkNumber(random));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaChevronLeft />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={handleClickPrev} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={handleClickNext} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomShow} className="random-btn">
        Surprise me
      </button>
    </article>
  );
};

export default Review;
