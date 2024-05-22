import {
  Card,
  CardBorder,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { services } from "../data/data.json";
import { Link } from "react-router-dom";
import Divider from "./ui/divider";
import Underline from "./ui/underline";
import Container from "./ui/container";

const Services = () => {
  return (
    <Container>
      <div className="relative flex flex-col w-full justify-center items-center gap-24 px-4 lg:px-12 pt-16 pb-64 overflow-clip">
        <Underline color={"background"} thickness={10}>
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-thin">
            Unsere Services
          </h1>
        </Underline>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-4">
          {services.map((service) => (
            <Link key={service.name} to={service.to}>
              <Card className="h-full">
                <CardBorder />
                <CardHeader>
                  <CardTitle className="w-fit">
                    <Underline color={"background"} thickness={4}>
                      {service.name}
                    </Underline>
                  </CardTitle>
                  <CardDescription className="text-md">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{service.content}</p>
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
