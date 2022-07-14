import React from "react";

import PinkBeach from "../assets/pink-beach.jpg";
import Nihiwatu from "../assets/Nihiwatu.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Indonesia Tropical's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={PinkBeach} alt="/" />
        <img className="w-full h-full object-cover" src={Nihiwatu} alt="/" />
        <img className="w-full h-full object-cover" src={Maldives} alt="/" />
        <img className="w-full h-full object-cover" src={Maldives2} alt="/" />
        <img className="w-full h-full object-cover" src={KeyWest} alt="/" />
      </div>
    </div>
  );
};

export default Destinations;
