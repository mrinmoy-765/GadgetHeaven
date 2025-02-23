import React from "react";
import { BsEmojiFrown } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div className="flex w-full h-screen flex-col lg:flex-row items-center justify-center">
      {/* First Div: 3/5 Width */}
      <div className="card rounded-box grid h-auto flex-grow lg:w-3/5 place-items-center">
        <BsEmojiFrown className="text-9xl text-gray-500"/>
        <h1 className="text-9xl text-gray-500 font-[1000]">404</h1>
        <p className="text-4xl text-gray-500 font-semibold">Page Not Found</p>
      </div>

      {/* Thicker Divider */}
      <div className="divider lg:divider-horizontal"></div>

      {/* Second Div: 2/5 Width */}
      <div className="card rounded-box grid h-32 flex-grow lg:w-2/5 place-items-center text-center">
        <p className="text-base font-semibold text-gray-400">
          The site configured at this address does not contain the requested
          file
        </p>
        <p className="text-base text-gray-400 font-semibold">If this is your site, make sure the filename cases match the URL</p>
      </div>
    </div>
  );
};

export default ErrorPage;
