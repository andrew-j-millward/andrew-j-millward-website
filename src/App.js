import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import profile from "./andrew-millward-professional-2-removebg-pentagon-left.png";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home profile={profile} />} />
          <Route exact path="/about" element={<h1>Hi2</h1>} />
          <Route exact path="/portfolio" element={<h1>Hi3</h1>} />
          <Route exact path="/contact" element={<h1>Hi4</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
