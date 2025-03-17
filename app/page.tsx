import Index from "./Screen/Index";
import MoreDetails from "./Screen/MoreDetails";

export default function Home() {
  return (
    <div className="w-full mt-[60px] md:mt-[80px]">
      <Index />
      <MoreDetails />
      <div className="h-[1000px]"/>
    </div>
  );
}

