import Image, { StaticImageData } from "next/image";

interface NetworkCardProps {
  imageSrc: StaticImageData;
  title?: string;
  description?: string;
  buttonText?: string;
  classs?: string;
}

export default function NetworkCard({ imageSrc, classs, title, description, buttonText }: NetworkCardProps) {
  return (
    <div className={`flex flex-col md:flex-row items-center ${classs} p-6 md:p-8 rounded-2xl gap-6`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={imageSrc}
          alt="Network Image"
          width={400}
          height={300}
          className="rounded-lg w-full max-w-[400px] h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{description}</p>
        <button className="bg-black bg-primary text-white py-2 px-4 md:px-6 rounded-lg hover:bg-gray-800 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
