import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="text-center mt-12">
          <h1 className="font-bold text-2xl">Gadget Heaven</h1>
          <p className="font-semibold text-gray-500 mt-2">
            Leading the way in cutting-edge technology and innovation
          </p>
        </div>
        <div className="divider"></div>
      </div>
      <footer className="footer text-base-content p-10 grid grid-cols-3 place-items-center">
        <nav>
          <h6 className="font-bold text-black text-lg">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black text-lg">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black text-lg">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
