import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import CallUs from "./CallUs";

const AppointmentDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="action" size="action" className="text-md font-bold">
          Termin buchen
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-8 pt-12">
        <div>
          <CallUs />
        </div>
        <DialogClose asChild>
          <Button>Schließen</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
