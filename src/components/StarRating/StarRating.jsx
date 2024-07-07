/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const mouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };

  const mouseLeaveHandler = () => {
    setHover(rating);
  };

  return (
    <div className="flex">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? "text-yellow-500" : "text-gray-800"
            }
            onClick={() => handleClick(index)}
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={() => mouseLeaveHandler()}
            size={40}
          />
        );
      })}
    </div>
  );
}
