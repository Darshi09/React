import React, { useEffect, useState } from "react";

const Card = () => {
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
    <>
      <h1 className="text-center font-extrabold text-6xl mt-10 mb-6 ">
        PRODUCTS
      </h1>
      {loading && <p className="text-center text-xl font-medium">Loading...</p>}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10 pb-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-4 flex flex-col hover:shadow-lg transition-shadow duration-300"
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
            <p className="text-lg font-semibold text-green-600 mb-4">
              ${item.price}
            </p>
            <div className="mt-auto flex justify-between gap-2">
              <button
                type="button"
                className="flex-1 border border-gray-800 text-gray-900 hover:text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-2 transition-all"
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
              {/* <button
                type="button"
                className="flex-1 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2 transition-all"
              > */}
                <button type="button" className="flex-1 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">

                <i class="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Card;
