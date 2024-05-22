import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcMastercard,
  faCcVisa,
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoins,
  faRecycle,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
/* import { Input } from "./ui/input";
import SubscribeButton from "./ui/subscribe-button"; */
import { address } from "../data/data.json";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary/90 w-full border-t-4 border-secondary/40">
      <div className="flex bg-primary px-4 lg:px-12 py-4 justify-start xl:justify-center">
        <section className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Zahlungsarten</h3>
          <div className="flex gap-4 py-2">
            <FontAwesomeIcon icon={faCoins} size="3x" />
            <FontAwesomeIcon icon={faCcVisa} size="3x" />
            <FontAwesomeIcon icon={faCcMastercard} size="3x" />
          </div>
        </section>
      </div>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-24 px-4 lg:px-12 py-4">
        <section className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
          <div className="flex flex-col w-fit">
            <h3 className="text-xl font-semibold">Adresse</h3>
            <p>
              {address.company.title} {address.company.name}
            </p>
            <p>{address.street}</p>
            <p>
              {address.zip} {address.city}
            </p>
          </div>
        </section>
        <section className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Nachhaltigkeit</h3>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faRecycle} size="2x" />
              <FontAwesomeIcon icon={faSeedling} size="2x" />
            </div>
            <p>
              Nachhaltigkeit ist uns wichtig. Wir verwenden nur biologisch
              abbaubare Produkte und achten auf den verantwortungsvollen Umgang
              mit Ressourcen.
            </p>
          </div>
        </section>
        <section className="flex flex-col basis-1/3 gap-4 max-w-xl xl:max-w-full">
          <div className="flex flex-col text-start">
            <h3 className="text-xl font-semibold">Telefon</h3>
            <p className="text-2xl sm:text-4xl">{address.phone}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Socialmedia</h3>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
              <FontAwesomeIcon icon={faTiktok} size="2x" />
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col py-4 px-4 lg:px-12 xl:flex-row xl:justify-center xl:gap-2">
        <p>Copyright &copy; 2024 MarBenz Webdesign.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
