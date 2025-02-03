"use client";

import {
  formatText,
  getSubstringAfterLastDoubleAsterisk,
} from "@/utils/function";
import React from "react";

interface AboutUsProps {
  Tagline: string;
  description: string;
}
function trimBetweenAsterisks(str: string): string {
  const parts = str.split("*").filter((part) => part.trim() !== "");
  return parts.join("");
}

const AboutUs = ({ Tagline, description }: AboutUsProps) => {
  const imageSrc =
    "https://res.cloudinary.com/drcoe5pnl/image/upload/v1738573584/nextjs_uploads/ptgmop5jngtz2vu05fxx.png";

  return (
    <div id="about" className="my-20 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="relative h-[360px] w-full bg-cover bg-center opacity-90 rounded-lg "
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/drcoe5pnl/image/upload/v1738573409/nextjs_uploads/rzcoyrq1wkwiaqwiokw8.webp)"
            }}
          >
            <div className="absolute inset-0 bg-primary opacity-40"></div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            {Tagline && (
              <h3 className="text-2xl text-indigo-600 mb-2">
                {formatText(Tagline)}
              </h3>
            )}
            {description && (
              <h4 className="text-lg text-gray-700">
                {getSubstringAfterLastDoubleAsterisk(description)}
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
