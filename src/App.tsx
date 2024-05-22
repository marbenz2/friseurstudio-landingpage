import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Services from "./components/Services";
import Products from "./components/Products";
import Team from "./components/Team";

function App() {
  return (
    <div className="flex flex-col w-full max-w-[2560px]">
      <Hero>
        <CallToAction />
      </Hero>
      <Services />
      <Products />
      <Team />
    </div>
  );
}

export default App;
