import { imgPortfolioData } from "@/data/card";
import Image from "next/image";

export default function PortfolioHighlights() {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 px-4 bg-primary opacity-8080">
      <h2 className="text-white text-3xl font-bold mb-6">
        <span className="text-white font-semibold">Portfolio</span> Highlights
      </h2>
      <div className="grid grid-cols-3 gap-6">

        {imgPortfolioData.map((item,index)=>(
            <div key={index} className="rounded-lg overflow-hidden w-72 h-72">
            <img
              src={item.img}
              alt="Book and Camera"
              className="rounded-lg w-72 h-72"
            />
          </div>

        ))}
        {/* Image 1 */}
        
        
      </div>
    </div>
  );
}