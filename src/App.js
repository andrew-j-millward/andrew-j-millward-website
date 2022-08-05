import "./App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import profile from "./andrew-millward-professional-2-removebg-hexagon-right.png";

function App() {
  const [skipAnimation, setSkip] = useState(false);
  const onSkip = () => {
    setSkip(true);
  };
  return (
    <Router>
      <div className="App page-container">
        <div className="content-wrap">
          <Header onSkip={onSkip} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home profile={profile} skip={skipAnimation} onSkip={onSkip} />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contact" element={<h1>Hi4</h1>} />
          </Routes>
        </div>
        <div className="footer-gap">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
