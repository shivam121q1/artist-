import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface CrazyForYouPlanCardProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: { icon: LucideIcon; text: string }[];
}

export default function CrazyForYouPlanCard({ title, price, duration, description, features }: CrazyForYouPlanCardProps) {
  return (
    <div className="flex justify-center items-center ">
      <Card className="w-72 p-4 rounded-2xl shadow-md h-96">
        <CardHeader className="text-center">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-3xl font-extrabold mt-2">
            {price} <span className="text-sm font-normal">{duration}</span>
          </p>
          <p className="text-xs text-gray-600">{description}</p>

          <div className="flex flex-col items-center mt-4 space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-1">
                <feature.icon className="w-4 h-4 text-black" />
                <p className="text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2 mt-4">
          <Button className="w-full bg-black bg-primary text-white hover:bg-gray-800">Select Plan</Button>
          <p className="text-xs text-gray-500 underline">Broadband Facts ©</p>
        </CardFooter>
      </Card>
    </div>
  );
}
