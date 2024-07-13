// import StarRating from "./components/StarRating/StarRating";
// import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";

export default function App() {
  return (
    <div className="p-4">
      {/* Star rating component */}
      {/* <StarRating numOfStars={10} /> */}

      {/* Image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}

      {/* Load more data component */}
      <LoadMoreData />
    </div>
  );
}
