import Link from "next/link";
import React from "react";

function Button({ vil }) {
  return (
    <button className="link-button">
      <Link href={`/villains/${vil.id}`}>More Info</Link>
    </button>
  );
}

export default Button;
