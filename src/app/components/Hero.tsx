import React from "react";

function HeroSection() {
  return (
    <section
      className="bg-hero flex flex-col justify-center items-end w-full h-[calc(100vh-73px)] bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/homeimage3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
    >
      <div className="bg-white bg-opacity-80 p6 rounded-md md:w-1/2 text-center md:text-left">
        <p className="text-sm text-gray-500 uppercase mb-2">New Arrival</p>
        <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
          Discover Our <span className="text-yellow-600"> New Collection</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Discover the Art of Smart Living. <br />
          Your Dream Furniture with Innovation Designs.
        </p>
        <button className="bg-yellow-600 text-white rounded px-6 py-3  hover:bg-yellow-700 transition `">Buy Now</button>
      </div>
    </section>
  );
}

export default HeroSection;