import Image from "next/image";
import React from "react";
import Button from "./button";

function VillainCard({ vil }) {
  return (
    <div className="vil-card">
      <Image
        src={vil.image.closeup}
        width={500}
        height={500}
        alt="picture of the villain"
      />
      <h2>{vil.name}</h2>
      <p>{vil.occupation}</p>

      <Button vil={vil} />
    </div>
  );
}

export default VillainCard;
