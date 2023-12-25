import About from "./ui/about";
import SliderVillains from "./ui/slidervillain";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="wrapper">
        <About />
        <SliderVillains />
      </div>
    </div>
  );
}
