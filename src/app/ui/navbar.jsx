import Link from "next/link";
import React from "react";
import "../styles/main.css";
function Navbar() {
  return (
    <div className="nav-container">
      <h1>
        <Link href="/">Villains of Warcraft</Link>
      </h1>
      <ul className="nav">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Expansions</Link>
        <Link href="/villains">Villains</Link>
      </ul>
    </div>
  );
}

export default Navbar;
