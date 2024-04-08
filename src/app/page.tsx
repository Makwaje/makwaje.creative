import Cards from "@components/Cards";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Nav from "@components/Nav";
import Recent from "@components/Recent";
import Sponsors from "@components/Sponsors";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Recent />
      <Cards />
      <Sponsors />
      <Footer />
    </main>
  );
}

export default App;
