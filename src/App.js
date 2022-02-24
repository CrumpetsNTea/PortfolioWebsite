import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Missions from "./components/Missions";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Nav />
          <Missions />
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
