import { address } from "../data/data.json";

const CallUs = () => {
  return (
    <>
      <p className="text-2xl">
        <span className="text-3xl font-thin">Termin? </span>Rufen Sie uns an!
      </p>
      <p className="text-2xl tracking-wide text-primary font-semibold">
        {address.phone}
      </p>
    </>
  );
};

export default CallUs;
