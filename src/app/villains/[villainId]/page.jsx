import { getSingleVillain } from "@/app/lib/data";
import AboutVillain from "@/app/ui/aboutvillain";
import React from "react";

async function SingleVillain({ params }) {
  const character = await getSingleVillain(params.villainId);

  return (
    <div>
      <AboutVillain character={character} />
    </div>
  );
}

export default SingleVillain;
