import { Button } from "@/components/ui/button";
import { formatText } from "@/utils/function";

interface HeroSectionProps {
  tagLine: string;
  brandName: string;
}

export default function HeroSection({ tagLine, brandName }: HeroSectionProps) {
  return (
    <div
      className="relative h-[657px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
        'url(https://res.cloudinary.com/drcoe5pnl/image/upload/v1738401623/nextjs_uploads/hfhqyzukmffzkszmtk3e.jpg)'

      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-20"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-6 sm:px-8 max-w-4xl mr-auto ml-20">
        <div className="flex flex-col gap-4 items-start max-w-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {brandName}
          </h1>
          {tagLine && ( // Render only if tagLine exists
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {formatText(tagLine)}
            </h3>
          )}
          <Button className="bg-red-500 text-white px-6 py-3 sm:px-4 sm:py-2 font-semibold rounded-lg hover:bg-red-600">
            Upcoming Event
          </Button>
        </div>
      </div>
    </div>
  );
}
