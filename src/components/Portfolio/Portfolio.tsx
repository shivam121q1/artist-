import { imgPortfolioData } from "@/data/card";
import Image from "next/image";

export default function PortfolioHighlights() {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 px-4 bg-primary">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">
        <span className="text-white font-semibold">Portfolio</span> Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {imgPortfolioData.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden w-full h-60 sm:h-72">
            <img
              src={item.img}
              alt="Book and Camera"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
