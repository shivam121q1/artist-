import { Database, Wifi, MessageCircle, Smartphone } from "lucide-react";

export default function FeaturesBar() {
  return (
    <div className="w-full max-w-[951px] flex flex-wrap justify-center md:justify-between items-center py-4 mx-auto gap-6 md:gap-4">
      {/** Feature Item */}
      <div className="flex gap-3 items-center px-4">
        <Database className="w-6 h-6 text-primary" />
        <p className="text-sm font-medium">Unlimited Talk & Text</p>
        <div className="hidden md:block bg-primary w-1 h-10"></div>
      </div>

      <div className="flex gap-3 items-center px-4">
        <Wifi className="w-6 h-6 text-primary" />
        <p className="text-sm font-medium">Nationwide Coverage</p>
        <div className="hidden md:block bg-primary w-1 h-10"></div>
      </div>

      <div className="flex gap-3 items-center px-4">
        <MessageCircle className="w-6 h-6 text-primary" />
        <p className="text-sm font-medium">24/7 Customer Support</p>
        <div className="hidden md:block bg-primary w-1 h-10"></div>
      </div>

      <div className="flex gap-3 items-center px-4">
        <Smartphone className="w-6 h-6 text-primary" />
        <p className="text-sm font-medium">Hotspot Available</p>
      </div>
    </div>
  );
}
