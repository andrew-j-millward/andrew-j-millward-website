import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<h1>Hi1</h1>} />
          <Route exact path="/about" element={<h1>Hi2</h1>} />
          <Route exact path="/portfolio" element={<h1>Hi3</h1>} />
          <Route exact path="/contact" element={<h1>Hi4</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
