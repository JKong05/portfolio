import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/about"
            element={
              <Body>
                <About />
              </Body>
            }
          />
          <Route
            path="/projects"
            element={
              <Body>
                <Projects />
              </Body>
            }
          />
          <Route
            path="/contact"
            element={
              <Body>
                <Contact />
              </Body>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
