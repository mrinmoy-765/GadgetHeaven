import React, { useState, useEffect } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  // Function to filter gadgets based on selected category
  const filteredGadgets =
    selectedCategory === "All Products"
      ? gadgets
      : gadgets.filter((gadget) => gadget.category === selectedCategory);

  // Function to handle category selection
  const filterSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center mb-10">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-1/4 flex flex-col gap-3 bg-base-200 p-4">
          <h1 className="text-lg font-bold text-gray-700">Navigation Panel</h1>
          <div className="flex flex-col items-center gap-3 w-full">
            {["All Products", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "iPhone", "Tablet", "Camera"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-5 py-1.5 text-base text-gray-600 rounded-3xl w-2/4 text-center transition-all
                    ${
                      selectedCategory === category
                        ? "bg-purple-500 text-white font-bold"
                        : "bg-white hover:bg-purple-500 hover:text-white hover:font-bold"
                    }`}
                  onClick={() => filterSelectedCategory(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Gadgets Display Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-base-200 py-8 rounded-lg px-4 w-3/4">
          {filteredGadgets.length > 0 ? (
            filteredGadgets.map((gadget) => (
              <Gadget gadget={gadget} key={gadget.product_id} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No products found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
