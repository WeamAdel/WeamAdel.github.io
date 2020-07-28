import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/Home/Home";
import Story from "./components/Story/Story";
import Technologies from "./components/Technologies/Technologies";
import Agenda from "./components/Agenda/Agenda";
import Contact from "./components/Contact/Contact";
import CaseStudy from "./components/Portfolio/CaseStudy/CaseStudy";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/story" exact component={Story}></Route>
          <Route path="/technologies" exact component={Technologies}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/agenda" exact component={Agenda}></Route>
          <Route path="/case" exact component={CaseStudy}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
