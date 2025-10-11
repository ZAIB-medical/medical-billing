import FifthSection from "@/components/FifthSection";
import FouryhSection from "@/components/FouryhSection";
import HeroHome from "@/components/HeroHome";
import SecondSection from "@/components/SecondSection";
import SeventhSection from "@/components/SeventhSection";
import SixthSection from "@/components/SixthSection";
import ThirdSection from "@/components/ThirdSection";
import AddedSection from "@/components/AddedSection";

import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <HeroHome />
      <SecondSection />
      <ThirdSection />
<AddedSection />
      <FifthSection />
      <SeventhSection />
    </div>
  );
}
