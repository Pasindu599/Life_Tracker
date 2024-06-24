import Image from "next/image";
import Navbar from "./mainPageComponents/Navbar";
import HeroSection from "./mainPageComponents/HeroSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
