import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SelectPlanCardProps {
  icon?: LucideIcon;
  title: string;
  text: string;
}

export default function SelectPlanCard({ icon: Icon, title, text }: SelectPlanCardProps) {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-72 p-4 rounded-2xl  h-52 border-0">
        <div className="flex justify-center">
        <div className="bg-gray-500 border-white p-4 rounded-full">
            {Icon ? <Icon className="w-8 h-8 text-white" /> : null}
          </div>
        </div>
        <CardContent>
          <CardTitle className="text-center text-white text-lg font-bold">{title}</CardTitle>
          <p className="text-center text-sm text-white  mt-2">{text}</p>
        </CardContent>
      </Card>
    </div>
  );
}
