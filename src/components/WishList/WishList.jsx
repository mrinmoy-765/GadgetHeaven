import React from "react";
import PropTypes from "prop-types";
import { FaCartShopping } from "react-icons/fa6";
import { addToStoreCartList } from "../Utility/addToDb";

const WishList = ({ product }) => {
  const { prouct_id, product_title, product_image, price, description } =
    product;

  const handleAddToCart = (id) => {
    addToStoreCartList(id);
  };

  return (
    <div className="p-4 rounded-lg  bg-white flex">
      <div>
        <figure className=" py-2 flex justify-center">
          <img
            src={product_image}
            alt={product_title}
            className="h-[180px] object-cover rounded-md"
          />
        </figure>
      </div>
      <div className="ml-5">
        <h3 className="text-2xl font-bold mt-2">{product_title}</h3>
        <p className="text-base my-4 font-semibold text-gray-500">
          {description}
        </p>
        <p className="font-semibold text-lg">${price}</p>
        <button
          onClick={() => handleAddToCart(prouct_id)}
          className="flex items-center gap-2 text-base font-bold text-white px-6 py-2 bg-purple-500 rounded-3xl mt-5"
        >
          Add To Cart
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
};

export default WishList;

WishList.propTypes = {
  product: PropTypes.object,
};
