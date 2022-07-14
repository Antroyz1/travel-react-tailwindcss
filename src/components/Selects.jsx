import React from "react";

import PinkBeaches from "../assets/pink-beach.jpg";
import Nihiwatu from "../assets/Nihiwatu.jpg";
import Derawan from "../assets/derawan.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={PinkBeaches} text="Pink Beach,Komodo Island" />
      <SelectsCard bg={Nihiwatu} text="Nihiwatu Beach, Sumba Island" />
      <SelectsCard bg={Derawan} text="Derawan Beach, East Borneo" />
      <SelectsCard bg={Maldives2} text="Cozumel" />
      <SelectsCard bg={Maldives3} text="Jamaica" />
      <SelectsCard bg={KeyWest} text="Key West" />
    </div>
  );
};

export default Selects;
