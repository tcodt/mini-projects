/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";

export default function ImageSlider({ url, page, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setIsLoading(false);
      }
      console.log(images);
    } catch (err) {
      setErrorMessage(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (isLoading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMessage !== null) {
    return <div>Error occured ! {errorMessage}</div>;
  }

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div>
      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border-2 border-gray-300 hover:bg-gray-100"
        >
          Prev
        </button>
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "w-[300px] h-[500px] object-contain"
                    : "hidden"
                }
              />
            ))
          : null}
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border-2 border-gray-300 hover:bg-gray-100"
        >
          Next
        </button>
      </div>
      <span className="flex justify-center">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  ${
                    currentSlide === index ? "bg-gray-400" : "bg-gray-300"
                  } w-4 h-4 rounded-full mx-1 outline-none border-none
                `}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
