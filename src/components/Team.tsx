import Container from "./ui/container";
import Underline from "./ui/underline";

const Team = () => {
  return (
    <Container>
      <div className="flex flex-col w-full justify-center items-center gap-24 px-4 pt-16 pb-64 lg:px-12 xl:px-24">
        <Underline color={"background"} thickness={10}>
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-thin">
            Unser Team
          </h1>
        </Underline>
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-center">
          <div className="flex flex-col gap-4 col-span-2">
            <div>
              <h2 className="text-3xl">Unser Team</h2>
              <p className="text-xl font-thin">
                Dank intensiver und vor allem regelmässiger Weiterbildung, der
                unser Team durch externe Schulungen sowie auch interne
                Ausbildung ist für uns vor allem die "BERATUNG" der Schlüssel
                zum Erfolg. Das heißt, vorallem genau zuzuhören und exakt den
                Zustand Ihrer Frisur und Kopfhaut zu analysieren.
              </p>
            </div>
            <div>
              <h2 className="text-3xl">
                Wir sind erst zufrieden, wenn Sie es sind
              </h2>
              <p className="text-xl font-thin">
                Perfekter Schnitt, Farbe und Strähnentechnik runden die
                Zusammenarbeit zwischen Ihren Vorstellungen, unseren Ideen und
                Know How ab. Aktuelle Trends müssen immer im Einklang mit Ihrem
                Typ und Ihrer Haarbeschaffenheit umgesetzt werden.
              </p>
            </div>
            <div>
              <h2 className="text-3xl">Kopf - und Haarspezialisten</h2>
              <p className="text-xl font-thin">
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
