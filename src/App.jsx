import StarRating from "./components/StarRating/StarRating";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <StarRating numOfStars={10} />
    </div>
  );
}
