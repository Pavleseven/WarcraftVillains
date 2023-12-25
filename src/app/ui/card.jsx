// "use client";
import Image from "next/image";
import Link from "next/link";

export function Card({ vil, i, currentSlide, setCurrentSlide }) {
  return (
    <>
      <div
        className="home-card"
        style={{ transform: `translateX(${100 * (i - currentSlide)}%)` }}
      >
        <Image
          src={vil.image.closeup}
          width={500}
          height={500}
          alt="picture of the villain"
        />
        <h2>{vil.name}</h2>
        <Link href={`villains/${vil.id}`}>
          <button>More info</button>
        </Link>
      </div>
    </>
  );
}
