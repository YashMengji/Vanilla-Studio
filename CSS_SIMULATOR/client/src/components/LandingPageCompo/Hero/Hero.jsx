import "./Hero.css";
import HeroTopButton from "./HeroTopButton";
import HeroLowerButton from "./HeroLowerButton";
import HeroWriteUp from "./HeroWriteUp";
import Marque from "./Marque";

export default function Hero() {
  return (
    <div className="hero">
      <HeroTopButton />
      <HeroWriteUp />
      <HeroLowerButton />
      <Marque />
    </div>
  );
}