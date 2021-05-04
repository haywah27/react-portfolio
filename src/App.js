import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
          <Route exact path="/react-portfolio/" component={About} />
          <Route exact path="/react-portfolio/work" component={Work} />
          <Route exact path="/react-portfolio/contact" component={Contact} />
      </HashRouter>
    </div>
  );
}

export default App;
