import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products?limit=8&skip=${
            count === 0 ? 0 : count * 8
          }`
        );
        const result = await res.json();
        if (result && result.products) {
          setProducts((prevData) => {
            const newProducts = result.products.filter(
              (item) => !prevData.some((p) => p.id === item.id)
            );
            return [...prevData, ...newProducts];
          });
          setTotalProducts(result.total);
          setLoading(false);
        }
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [count]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-semibold">
        Loading...
      </div>
    );
  }

  const handleMoreData = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
    setProducts([]);
  };

  const reachMaxProducts = products.length >= 50;

  return (
    <div className="grid grid-cols-4 gap-4">
      {products && products.length ? (
        products.map((product) => (
          <div
            key={product.id}
            className="p-4 border-2 border-slate-200 rounded-lg flex flex-col items-center justify-between"
          >
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center">
          <h4 className="text-xl text-gray-700 font-semibold">
            Products are not loading !
          </h4>
          <p className="text-base text-gray-500 font-medium">
            Please check your connection or API
          </p>
        </div>
      )}

      {!error && (
        <div className="col-span-full text-center">
          <button
            disabled={reachMaxProducts}
            onClick={handleMoreData}
            className="p-1 bg-slate-300 rounded text-gray-700 font-semibold hover:bg-slate-200 transition"
          >
            More Products
          </button>
        </div>
      )}

      {reachMaxProducts && (
        <p className="col-span-full text-center text-base text-gray-700 font-semibold">
          You have reached to 50 products !{" "}
          <span
            onClick={handleReset}
            className="text-base text-blue-500 underline cursor-pointer"
          >
            Reset
          </span>
        </p>
      )}
    </div>
  );
}
