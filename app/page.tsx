import Image from "next/image";
import Index from "./Screen/Index";
import MoreDetails from "./Screen/MoreDetails";
import svg from "./Data/SVG/Group101.svg";

export default function Home() {
  return (
    <div className="w-full mt-[60px] md:mt-[80px]">
      <Index />

      <MoreDetails />

      <Image alt="img" src={svg} className=""/>
      <div className="h-[1000px] bg-white"/>
    </div>
  );
}

