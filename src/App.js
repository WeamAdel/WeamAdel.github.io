import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/Home/Home";
import Story from "./components/Story/Story";
import Technologies from "./components/Technologies/Technologies";
import Agenda from "./components/Agenda/Agenda";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import CaseStudy from "./components/Portfolio/CaseStudy/CaseStudy";
import BeingCooked from "./components/BeingCooked/BeingCooked";
import BooksShelf from "./components/BooksShelf/BooksShelf";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/story" exact component={Story} />
          <Route path="/technologies" exact component={Technologies} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/agenda" exact component={Agenda} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route
            path="/portfolio/case-study/:projectName"
            exact
            component={CaseStudy}
          />
          <Route path="/being-cooked" exact component={BeingCooked} />
          <Route path="/books-shelf" exact component={BooksShelf} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
