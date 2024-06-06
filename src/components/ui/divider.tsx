const Divider = ({
  color,
  orientation = "left",
}: {
  color: string;
  orientation?: "left" | "right";
}) => {
  return (
    <>
      {orientation === "left" ? (
        <div
          className={`absolute bottom-0 right-0 border-t w-full h-24 -rotate-[.75deg] transform origin-top-right ${color} z-10`}
        />
      ) : (
        <div
          className={`absolute bottom-0 left-0 border-t w-full h-24 rotate-[.75deg] transform origin-top-left ${color} z-10`}
        />
      )}
    </>
  );
};

export default Divider;
