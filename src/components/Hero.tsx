import React, { useRef } from "react";
import Divider from "./ui/divider";

const Hero = ({ children }: { children: React.ReactNode }) => {
  const home = useRef(null);

  return (
    <div
      ref={home}
      className="relative flex items-center justify-center sm:justify-start min-h-screen bg-hero-pattern bg-cover bg-fixed overflow-clip z-10"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background/80 to-background/0 -z-10" />
      {children}
      <Divider color={"bg-background"} />
    </div>
  );
};

export default Hero;
