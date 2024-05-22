import {
  Card,
  CardBorder,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import Divider from "./ui/divider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { products } from "../data/data.json";
import Underline from "./ui/underline";
import Container from "./ui/container";

const Products = () => {
  return (
    <Container left={true}>
      <div className="relative flex flex-col w-full justify-center items-center gap-24 px-4 lg:px-12 pt-16 pb-64 overflow-clip">
        <Underline color={"background"} thickness={10}>
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-thin">
            Unsere Produkte
          </h1>
        </Underline>
        <div className="flex flex-col w-full max-w-7xl gap-4">
          <Carousel>
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                >
                  <div className="p-1">
                    <Card>
                      <CardBorder />
                      <CardContent className="flex items-center justify-center p-0 pb-4">
                        <img
                          className="w-full h-64 object-cover"
                          src={"/" + product.image}
                          loading="lazy"
                          alt="product"
                        />
                      </CardContent>
                      <CardFooter className="flex flex-col items-start">
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription className="text-md">
                          {product.description}
                        </CardDescription>
                        <CardTitle className="mt-2 self-end">
                          {product.price}€
                        </CardTitle>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <h3 className="text-xl md:text-2xl xl:text-4xl font-thin">
          Besuche uns und lass dich von unserem vielfältigen Angebot
          inspirieren!
        </h3>
        <Divider color={"bg-background"} />
      </div>
    </Container>
  );
};

export default Products;
