import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import PageNotFound from "./components/ErrorBoundary/ErrorFallbackUIs/NotFound";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
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
      <HashRouter basename="/">
        <Navbar />
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path={"/experience"} exact component={Experience} />
            <Route path={"/story"} exact component={Story} />
            <Route path={"/technologies"} exact component={Technologies} />
            <Route path={"/contact"} exact component={Contact} />
            <Route path={"/agenda"} exact component={Agenda} />
            <Route path={"/portfolio"} exact component={Portfolio} />
            <Route
              path={"/portfolio/case-study/:projectName"}
              exact
              component={CaseStudy}
            />
            <Route path={"/being-cooked"} exact component={BeingCooked} />
            <Route path={"/books-shelf"} exact component={BooksShelf} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </ErrorBoundary>
      </HashRouter>
    </div>
  );
}

export default App;
