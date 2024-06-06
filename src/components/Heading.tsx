const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-3xl md:text-4xl xl:text-6xl text-center font-thin bg-primary w-full py-3 px-4 border-b-4 border-white/60">
      {children}
    </h1>
  );
};

export default Heading;
