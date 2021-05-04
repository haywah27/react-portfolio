import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <About />} />
          <Route exact path="/work" component={() => <Work />} />
          <Route exact path="/contact" component={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
