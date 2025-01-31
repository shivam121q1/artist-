import { Database, Wifi, MessageCircle, Smartphone } from "lucide-react";

export default function FeaturesBar() {
  return (
    <div className="w-[951px] flex justify-between items-center py-2  mx-auto">
      <div className="flex gap-4 items-center px-4">
        <Database className="w-6 h-6 mb-2 text-black text-primary" />
        <p className="text-sm font-medium ">Unlimited Talk & Text</p>
        <div className="bg-black bg-primary border-2 ml-2 w-1 h-10 "></div>
      </div>
      <div className="flex gap-4 items-center px-4">
        <Wifi className="w-6 h-6 mb-2 text-black text-primary" />
        <p className="text-sm font-medium">Nationwide Coverage</p>
        <div className="bg-black bg-primary border-2 ml-2 w-1 h-10 "></div>

      </div>
      <div className="flex gap-4 items-center px-4 h-10">
        <MessageCircle className="w-6 h-6 mb-2 text-black text-primary" />
        <p className="text-sm font-medium">24/7 Customer Support</p>
        <div className="bg-black bg-primary border-2 ml-2 w-1 h-10 "></div>

      </div>
      <div className="flex gap-4 items-center px-4">
        <Smartphone className="w-6 h-6 mb-2 text-black text-primary" />
        <p className="text-sm font-medium">Hotspot Available</p>
      </div>
    </div>
  );
}