"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getAIBrandOutput } from "@/utils/api"; // Import the API function

import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import SelectPlanCard from "@/components/card/card";
import CrazyForYouPlanCard from "@/components/cardPlan/cardPlan";
import NetworkCard from "@/components/MainCard/MainCard";
import { cardData, planData } from "@/data/card";

import img from "./image1.jpg";
import img1 from "./image2.jpg";
import FeaturesBar from "@/components/Box/Box";
import PortfolioHighlights from "@/components/Portfolio/Portfolio";

function HomeComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [brandOutput, setBrandOutput] = useState<any>(null);
  const [brandName, setBrandName] = useState<string>("");
  const [outputData, setOutputData] = useState<any>(null);

  useEffect(() => {
    if (!id) return; // Avoid running fetch when there is no ID
    const getBrandData = async () => {
      try {
        const data = await getAIBrandOutput(id);
        console.log("API Data:", data);

        setBrandOutput(data);
        setBrandName(data?.brandName || "");
        setOutputData(data?.output ? JSON.parse(data?.output) : {});

        // Set primary color globally in Tailwind
        const fontColor = data?.output ? JSON.parse(data?.output)?.fontColor : "#000000";
        document.documentElement.style.setProperty("--primary-color", fontColor);
      } catch (err) {
        console.error("Failed to fetch brand output:", err);
      }
    };
    getBrandData();
  }, [id]); // Added `id` as a dependency

  return (
    <div className="flex flex-col">
      <Navbar logoUrl={outputData?.logoURL} />
      <div className="flex flex-col gap-12">
        <HeroSection tagLine={outputData?.tagline} brandName={brandOutput?.brandName} />
        <FeaturesBar />

        {/* Section-1: How it works */}
        <SectionHowItWorks />

        {/* Section-2: Pricing Plans */}
        <SectionPricingPlans />

        {/* Section-3: Network Cards */}
        <SectionNetworkCards />

        <PortfolioHighlights />

        {/* Display brand name */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center">@Info {brandName}</h2>
        </div>
      </div>
    </div>
  );
}

// Wrap in Suspense for `useSearchParams()`
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeComponent />
    </Suspense>
  );
}

// Section: How it works
const SectionHowItWorks = () => (
  <div
    className="flex flex-col justify-center gap-7 mt-10"
    style={{
      backgroundImage: "url(https://res.cloudinary.com/drcoe5pnl/image/upload/v1738402219/nextjs_uploads/jucefbvnwbzfbsnynl2s.jpg)",
    }}
  >
    <div className="flex flex-col justify-center gap-7 bg-primary opacity-80 py-12">
      <h2 className="text-2xl md:text-3xl text-white font-bold text-center">How it works</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((item, index) => (
          <SelectPlanCard key={index} title={item.heading} text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  </div>
);

// Section: Pricing Plans
const SectionPricingPlans = () => (
  <div className="flex flex-col gap-10">
    <h2 className="text-2xl md:text-3xl font-bold text-center">
      One simple price. Many great benefits.
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {planData.map((plan, index) => (
        <CrazyForYouPlanCard
          key={index}
          title={plan.title}
          price={plan.price}
          duration={plan.duration}
          description={plan.description}
          features={plan.features}
        />
      ))}
    </div>
  </div>
);

// Section: Network Cards
const SectionNetworkCards = () => (
  <div className="flex flex-col gap-10">
    <NetworkCard
      title="Bring your own phone"
      description="Bring your compatible phone to our network for seamless connectivity. Save money, keep your number, and activate your service in just a few simple steps."
      buttonText="Get Started"
      imageSrc={img}
    />
    <NetworkCard
      title="America’s best network"
      description="Experience unmatched coverage and lightning-fast speeds on America’s best network. Stay connected anywhere with reliable service you can trust."
      buttonText="Check Coverage"
      imageSrc={img1}
      classs="flex flex-col md:flex-row-reverse ml-20"
    />
  </div>
);
