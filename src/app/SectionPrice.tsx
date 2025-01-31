import CrazyForYouPlanCard from "@/components/cardPlan/cardPlan";
import React, { useState, useEffect } from "react";
import { LucideIcon } from "lucide-react"; // Import LucideIcon type

interface SectionPricingPlansProps {
  plan: string[];  // Array of new titles for the plans
  data: {
    title: string;
    price: string;
    duration: string;
    description: string;
    features: {
      icon: LucideIcon;  // Use the LucideIcon type for the icon
      text: string;
    }[];  // Array of features, each with an icon and text
  }[]; // Array of plan data objects
}

const SectionPricingPlans = ({ data, plan }: SectionPricingPlansProps) => {
  // State to Re-run effect when `data` or `plan` changes

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        One simple price. Many great benefits.
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((plan, index) => (
          <CrazyForYouPlanCard
            key={index}
            title={plan.title}
            price={plan.price}
            duration={plan.duration}
            description={plan.description}
            features={plan.features} // Pass features data
          />
        ))}
      </div>
    </div>
  );
};

export default SectionPricingPlans;
