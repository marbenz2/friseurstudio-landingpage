import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { services } from "../data/data.json";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

const ServicesDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="actionOutline"
          size="action"
          className="text-md font-bold"
        >
          Unser Service
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-8 pt-12 h-full sm:h-fit overflow-y-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <Card key={service.name} className="h-full overflow-clip">
              <CardHeader className="p-3">
                <CardTitle className="w-fit">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <Table>
                  <TableBody>
                    {service.services.map((service) => (
                      <TableRow key={service.name}>
                        <TableCell className="flex flex-col w-full p-0 py-1">
                          {service.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
        <DialogClose asChild>
          <Button>Schließen</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesDialog;
