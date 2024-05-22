import { address } from "../data/data.json";
import AppointmentDialog from "./AppointmentDialog";
import ServicesDialog from "./ServicesDialog";

const CallToAction = () => {
  return (
    <div className="flex flex-col py-48 p-4 lg:p-12 max-w-2xl lg:max-w-5xl">
      <p className="text-md md:text-xl xl:text-2xl tracking-wide text-primary mb-8">
        Willkommen im {address.company.title} {address.company.name}
      </p>
      <p className="text-xl md:text-2xl xl:text-6xl font-semibold mb-4">
        Die Besten, wenn es um Haare, Nägel oder Extensions geht.
      </p>
      <p className="text-md md:text-xl xl:text-2xl font-thin mb-16">
        Wir bieten Ihnen eine breite Palette an Dienstleistungen an. Überzeugen
        Sie sich selbst und buchen Sie noch heute einen Termin bei uns im{" "}
        {address.company.title} {address.company.name}.
      </p>
      <div className="flex flex-col max-w-md sm:flex-row gap-4 lg:gap-8">
        <AppointmentDialog />
        <ServicesDialog />
      </div>
    </div>
  );
};

export default CallToAction;
