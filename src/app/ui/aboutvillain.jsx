import Image from "next/image";
import React from "react";
import "../styles/villain.css";
function AboutVillain({ character }) {
  return (
    <div className="about-vil-container">
      <div className="image-container">
        <Image
          width={500}
          height={500}
          src={
            character?.image?.background
              ? character?.image?.background
              : character?.image?.closeup
          }
          alt="background-image"
        />
        <h2>{character?.name}</h2>
        <p>{character?.occupation}</p>
        <p>{character?.typeofvillain}</p>
      </div>
      <div className="character-data">
        <h2>About the {character?.occupation}</h2>
        <div className="bio">
          <p>{character?.biography?.bio}</p>
          <p>For more information visit:{character?.biography?.bio}</p>
        </div>
        <div className="character-traits">
          <ul>
            <span>POWERS:</span>
            {character?.powers.map((power, i) => {
              return <li key={i}>{power}</li>;
            })}
          </ul>
          <ul>
            <span>Crimes:</span>
            {character?.crimes.map((power, i) => {
              return <li key={i}>{power}</li>;
            })}
          </ul>
          <ul>
            <span>Hobbies:</span>
            {character?.hobby.map((power, i) => {
              return <li key={i}>{power}</li>;
            })}
          </ul>
          <ul>
            <span>Goals:</span>
            {character?.goals.map((power, i) => {
              return <li key={i}>{power}</li>;
            })}
          </ul>
          <ul>
            <span>Alias:</span>
            {character?.nicknames.map((power, i) => {
              return <li key={i}>{power}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutVillain;
