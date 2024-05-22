const Divider = ({ color }: { color: string }) => {
  return (
    <>
      <div
        className={`absolute bottom-0 right-0 border-t-4 w-full h-24 -rotate-[1deg] transform origin-top-right ${color} z-10`}
      />
      <div
        className={`absolute bottom-0 left-0 border-t-4 w-1/2 h-24 rotate-[1deg] transform origin-top-left ${color} z-10`}
      />
    </>
  );
};

export default Divider;
