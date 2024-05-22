const Underline = ({
  color,
  thickness = 2,
  children,
}: {
  color: "primary" | "background";
  thickness?: 1 | 2 | 4 | 6 | 8 | 10 | 12;
  children: React.ReactNode;
}) => {
  let bgColor = "";

  if (color === "primary") {
    bgColor = "bg-background/60";
  }
  if (color === "background") {
    bgColor = "bg-primary/60";
  }

  return (
    <div className="relative flex flex-col px-4 py-2 z-10">
      {children}
      <div
        className={`absolute bottom-2 left-0 w-full h-${thickness} ${bgColor} -z-10 -skew-y-1 -skew-x-12 drop-shadow-md`}
      />
    </div>
  );
};

export default Underline;
