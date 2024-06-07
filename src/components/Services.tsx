import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { services } from "../data/data.json";
import { Link } from "react-router-dom";
import Divider from "./ui/divider";
import Container from "./ui/container";
import Heading from "./Heading";

const Services = () => {
  return (
    <Container>
      <div className="relative flex flex-col w-full justify-center items-center gap-24 px-4 lg:px-12 pt-16 pb-64 overflow-clip">
        <Heading>Unser Service</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-4">
          {services.map((service) => (
            <Link key={service.name} to={service.to}>
              <Card className="h-full hover:outline hover:outline-primary">
                <CardHeader>
                  <CardTitle className="w-fit">{service.name}</CardTitle>
                  <CardDescription className="text-md">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{service.content}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <Divider color={"bg-background"} />
      </div>
    </Container>
  );
};

export default Services;
