// import StarRating from "./components/StarRating/StarRating";

import ImageSlider from "./components/ImageSlider/ImageSlider";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Star rating component */}
      {/* <StarRating numOfStars={10} /> */}

      {/* Image slider component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}
