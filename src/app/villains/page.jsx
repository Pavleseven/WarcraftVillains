import React from "react";
import "../styles/villain.css";
import { getVillains } from "../lib/data";
import VillainCard from "../ui/villainpagecard";

async function Villains() {
  const data = await getVillains();

  return (
    <div className="vil-container">
      {data.map((vil) => {
        return <VillainCard vil={vil} key={vil.id} />;
      })}
    </div>
  );
}

export default Villains;
