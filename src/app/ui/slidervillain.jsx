import React from "react";
import { getVillains } from "../lib/data";
import CardContianer from "./cardcontainer";
async function SliderVillains() {
  const villains = await getVillains();

  return (
    <div>
      <CardContianer villains={villains} />
    </div>
  );
}

export default SliderVillains;
