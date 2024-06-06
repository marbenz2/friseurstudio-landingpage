import { Link } from "react-router-dom";
import { address } from "../data/data.json";

const Logo = ({ onClickToTop }: { onClickToTop: () => void }) => {
  return (
    <Link to="/" onClick={onClickToTop}>
      <p className="text-4xl tracking-widest font-thin">
        {address.company.title.toUpperCase()}
      </p>
      <p className="text-xl text-center tracking-widest font-semibold bg-primary rounded-lg w-full py-1 px-4">
        {address.company.name}
      </p>
    </Link>
  );
};

export default Logo;
