import { About } from "./components/About";
import { Main } from "./components/Main";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Navbar } from "./layouts/Navbar";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
