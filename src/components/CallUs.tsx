import { address } from "../data/data.json";

const CallUs = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl px-4 font-thin">Rufen Sie uns an!</p>
      <p className="text-xl text-center tracking-wide font-semibold bg-primary rounded-lg w-fit py-1 px-4">
        {address.phone}
      </p>
    </div>
  );
};

export default CallUs;
