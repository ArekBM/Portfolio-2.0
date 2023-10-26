// views
import { About, Contact, Hero, Projects, Resume } from "./views";

// components
import { Menu } from "./components";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact /> 
      <Menu />
    </>
  );
}

export default App;
