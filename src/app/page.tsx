"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getAIBrandOutput } from "@/utils/api"; // Import the API function

import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import SelectPlanCard from "@/components/card/card";
import CrazyForYouPlanCard from "@/components/cardPlan/cardPlan";
import NetworkCard from "@/components/MainCard/MainCard";
import { cardData, planData } from "@/data/card";

import img from "./firstImage.jpg";
import img1 from "./SecondImage.jpg";
import FeaturesBar from "@/components/Box/Box";
import PortfolioHighlights from "@/components/Portfolio/Portfolio";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [brandOutput, setBrandOutput] = useState<any>(null); // Holds entire response
  const [brandName, setBrandName] = useState<string>(""); // Holds brandName
  const [inputData, setInputData] = useState<any>(null); // Parsed input data
  const [outputData, setOutputData] = useState<any>(null); // Parsed output data

  useEffect(() => {
    if (!id) return; // Avoid running fetch when there is no ID
    const getBrandData = async () => {
      try {
        const data = await getAIBrandOutput(id);
        console.log("API Data:", data); // Log the API response

        setBrandOutput(data);
        setOutputData(data?.output ? JSON.parse(data?.output) : {});

        const fontColor = data?.output ? JSON.parse(data?.output)?.fontColor : "#000000";
        document.documentElement.style.setProperty("--primary-color", fontColor);
      } catch (err) {
        console.error("Failed to fetch brand output:", err);
      }
    };
    getBrandData();

    
    
  }, [id]);

  return (
    <div className="flex flex-col ">
      <Navbar logoUrl={outputData?.logoURL} />
      <div className="flex flex-col gap-12">
        
        <HeroSection
          tagLine={outputData?.tagline}
          brandName={brandOutput?.brandName}
        />
        <FeaturesBar />
        {/* Section-1: How it works */}
        <SectionHowItWorks />

        {/* Section-2: Pricing Plans */}
        <SectionPricingPlans />

        {/* Section-3: Network Cards */}
        <SectionNetworkCards />

        <PortfolioHighlights />

        {/* Display the parsed brand name and output data */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            {brandName}
          </h2>
          
        </div>
      </div>
    </div>
  );
}

// Section for "How it works"
const SectionHowItWorks = () => (
  <div
    className="flex flex-col justify-center gap-7 mt-10  "
    style={{
      backgroundImage:
        "url(https://s3-alpha-sig.figma.com/img/9cdf/f64d/dafdab4893da00900aaeedb7dbd7c76c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aTcwqF1VSlN-5Ll-Dk54LVAXIy~YE2TJWfkDygrUs7OImldUNl8i8KK-s5rtDXLyyLcXIen5YnHx5fVTGmeHNozNNqzKNe-pbUWRFiSKY9KQxyDPY41TNAMdzW3UeWGvRiF~UM-bGNPRhquODP51krtFwj89COfVqAFUHcJiAJCMCbkf-MRgjQ5f-YGG2cIQjLh1PwPybkTrFKhtmH9q3nak9I8Pnbz31j5paQASMo837I0cQkHhF5ccNrH4urhmesf9eDu9j9L5XednTEO4BOREnregkstkSbyDzI5IJPxp1vA2bdZMrS4KNj-p0vc-WyIpaDjP96Z7LtzTeV4o6Q__)",
    }}
  >
    <div className="flex flex-col justify-center gap-7 bg-primary opacity-80 py-12">

    <h2 className="text-2xl md:text-3xl text-white font-bold text-center">How it works</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {cardData.map((item, index) => (
        <SelectPlanCard
        key={index}
        title={item.heading}
        text={item.text}
        icon={item.icon}
        />
      ))}
    </div>
  </div>
  </div>
);

// Section for Pricing Plans
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

// Section for Network Cards
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
      classs="flex flex-col md:flex-row-reverse"
    />
  </div>
);
