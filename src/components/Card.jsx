import React, { useEffect, useState } from "react";

const Card = ({ bool }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function change() {
    setLoading(true);
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const res = await result.json();
      setData(res);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    change();
  }, []);

  return (
    <div>
      <h1
        className={`${
          bool ? "text-white" : "bg-black-900"
        } text-5xl font-bold text-center my-8`}
      >
        PRODUCTS
      </h1>

      {loading && <p className="text-center text-xl font-medium">Loading...</p>}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10 pb-20">
        {data.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg shadow-md border p-4 flex flex-col hover:shadow-lg transition-shadow duration-300 ${
              bool
                ? "bg-black-900 text-white border-gray-700"
                : "bg-white text-gray-900 border-gray-200"
            }`}
          >
            <div className="w-full h-[250px] flex items-center justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">
              {item.title.slice(0, 30)}...
            </h3>
            <p className="text-lg font-semibold text-green-500 mb-4">
              ${item.price}
            </p>
            <div className="mt-auto flex justify-between gap-2">
              <button
                type="button"
                className={`flex-1 border text-sm px-4 py-2 font-medium rounded-md transition-all ${
                  bool
                    ? "border-white text-white hover:bg-white hover:text-gray-900"
                    : "border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <button
                type="button"
                className={`flex-1 text-sm px-4 py-2 font-medium rounded-md transition-all border text-center ${
                  bool
                    ? "border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white"
                    : "border-purple-700 text-purple-700 hover:bg-purple-800 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Card;
