import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageIcon, VideoIcon } from "lucide-react";

export function CardDemo({ className, ...props }) {
  return (
    <div className="flex">
      <Card className="ring-black opacity-50 hover:opacity-100 transition-opacity">
        <CardHeader>
          <CardTitle className="text-center">Image</CardTitle>
        </CardHeader>
        <CardContent className=" flex items-center justify-center mt-5">
          <div className=" flex items-center justify-center w-full  rounded-md border p-4 ">
            <ImageIcon height={50} width={50} />
          </div>
        </CardContent>
        <CardFooter className="text-sm font-medium leading-none mt-10">
          Converse With Images , Caption them at a Click
        </CardFooter>
      </Card>
      <Card className="ring-black opacity-50 hover:opacity-100 transition-opacity border-none hover:border hover:border-slate-300 cursor-pointer hover:border-l-rose-100">
        <CardHeader>
          <CardTitle className="text-center">Video</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center mt-5">
          <div className=" flex items-center justify-center w-full  rounded-md border p-4">
            <VideoIcon height={50} width={50} />
          </div>
        </CardContent>
        <CardFooter className="text-sm font-medium leading-none mt-10">
          Converse With Videos , Mesmerise and Visualise!
        </CardFooter>
      </Card>
    </div>
  );
}
