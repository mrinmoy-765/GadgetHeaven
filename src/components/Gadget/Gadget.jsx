import React from "react";

const Gadget = ({Gadget}) => {

    const {
        product_id,
        product_title,
        product_image,
        category,
        price,
        description,
        Specification,
        availability,
        rating
      } = gadget;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://bplusmovieblog.com/wp-content/uploads/2013/08/pirates-of-the-caribbean-dead-mans-chest-269.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
