import Heading from "./Heading";
import Container from "./ui/container";

const Team = () => {
  return (
    <Container>
      <div className="flex flex-col w-full justify-center items-center gap-24 px-4 lg:px-12 pt-16 pb-64 overflow-clip">
        <Heading>Unser Team</Heading>
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-center">
          <div className="flex flex-col gap-4 col-span-2">
            <div className="flex flex-col gap-4">
              <p className="text-lg">
                Dank intensiver und vor allem regelmässiger Weiterbildung, der
                unser Team durch externe Schulungen sowie auch interne
                Ausbildung ist für uns vor allem die "BERATUNG" der Schlüssel
                zum Erfolg. Das heißt, vorallem genau zuzuhören und exakt den
                Zustand Ihrer Frisur und Kopfhaut zu analysieren.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">
                Wir sind erst zufrieden, wenn Sie es sind
              </h2>
              <p className="text-lg">
                Perfekter Schnitt, Farbe und Strähnentechnik runden die
                Zusammenarbeit zwischen Ihren Vorstellungen, unseren Ideen und
                Know How ab. Aktuelle Trends müssen immer im Einklang mit Ihrem
                Typ und Ihrer Haarbeschaffenheit umgesetzt werden.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">Kopf - und Haarspezialisten</h2>
              <p className="text-lg">
                Speziell geschulte Profis für Schnitt, Farbe und Strähnentechnik
                sowie Abend- und Brautfrisuren beraten Sie gern. Unsere
                Kopfhaut- u. Haarspezialisten helfen bei Haut- und
                Haarproblemen.
              </p>
            </div>
          </div>
          <img
            src="/team.webp"
            alt="team"
            className="col-span-3 object-cover rounded-lg drop-shadow-lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default Team;
