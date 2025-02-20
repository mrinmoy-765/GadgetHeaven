import React from "react";
import BannerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      {/* Purple Background Section */}
      <div className="bg-purple-500 pt-10 pb-44 text-center">
        <h1 className="text-6xl font-extrabold text-white">
          Upgrade Your Tech Accessorize <br /> With Gadget Heaven Accessories
        </h1>
        <p className="text-gray-200 font-semibold my-7">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br />
          the coolest accessories, we have it all!
        </p>
        <button className="mt-2 bg-white rounded-4xl py-2 px-6 text-lg font-bold text-purple-500">
          Shop Now
        </button>
      </div>

      {/* Image Section with Blur Effect */}
      <div className="flex justify-center">
        <div className="relative bottom-32 w-3/5 rounded-3xl border-2 border-white p-4 
                        bg-white/30 backdrop-blur-lg">
          <img src={BannerImage} alt="" className="w-full h-88 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

