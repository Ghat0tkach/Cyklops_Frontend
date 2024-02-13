import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CardDemo } from "./Card";

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mb-3 text-2xl text-center font-semibold ">
          Start
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black">
        <AlertDialogHeader>
          <CardDemo />
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
