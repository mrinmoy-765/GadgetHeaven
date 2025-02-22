import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { addToStoreCartList, addToStoreWishList } from "../Utility/addToDb";

const GadgetDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);

  const data = useLoaderData();
  //console.log("Data from useLoaderData:", data);

  // console.log("Params product_id:", product_id); // Check if useParams is providing correct id
  // console.log("Parsed ID:", id);
  // console.log("Data from useLoaderData():", data); // Check if data is being received correctly

  //const gadget = data.find((Gadget) => Gadget.product_id === id);
  const gadget = data.find(
    (Gadget) => String(Gadget.product_id) === String(id)
  );

  //console.log("Found gadget:", gadget); // Check if gadget is found

  const {
    product_id: currentPrroductId,
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadget;

  const handleAddToCart = (id) => {
    addToStoreCartList(id);
  };

  const handleAddToWishList = (id) => {
    addToStoreWishList(id);
  };

  return (
    <div>
      <div className="bg-purple-500 pt-10 pb-64 text-center">
        <h1 className="text-white text-3xl font-extrabold">Product Details</h1>
        <p className="text-white font-semibold">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="flex justify-center bg-base-200 ">
        <div className="relative bottom-44 w-3/5 rounded-3xl border-2 border-white p-4  bg-white flex">
          <div className="w-1/2 h-auto">
            <img
              src={product_image}
              alt={product_title}
              className="object-cover rounded-md"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold mt-2">{product_title}</h2>
            <p className="text-base font-semibold text-purple-600 my-0.5">
              Price: ${price}
            </p>
            <button
              className={`my-2 px-2 py-1 text-sm rounded-3xl ${
                availability
                  ? "text-green-600 border-1 border-green-800 bg-green-200"
                  : "text-red-600 border-1 border-red-800 bg-red-200"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="text-sm text-gray-500 mb-2.5">{description}</p>
            <span className="font-bold text-lg">Specifications:</span>
            <ul className="mt-1 text-sm text-gray-700">
              {Specification.map((spec, index) => (
                <li key={index}>✔ {spec}</li>
              ))}
            </ul>
            <p className="font-semibold text-base mt-3">Rating</p>
            <p className="text-yellow-500 text-lg">
              {Array.from({ length: Math.floor(rating) }, (_, index) => (
                <span key={index}>⭐</span>
              ))}{" "}
              <span className="text-base font-semi text-gray-500">
                {" "}
                {rating}
              </span>
            </p>
            {/* buttons */}
            <div className="flex">
              <button
                onClick={() => handleAddToCart(currentPrroductId)}
                className="flex items-center gap-2 text-base font-bold text-white px-6 py-2 bg-purple-500 rounded-3xl mt-3"
              >
                Add To Cart
                <FaCartShopping />
              </button>
              <button
                onClick={() => handleAddToWishList(currentPrroductId)}
                className="p-2 mt-3.5 ml-6 border border-gray-400 hover:bg-gray-300 rounded-full flex items-center justify-center"
              >
                <CiHeart className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
