import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
const URL_PREFIX = "https://www.weamadel.xyz/";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path={URL_PREFIX + "/experience"}
              exact
              component={Experience}
            />
            <Route path={URL_PREFIX + "/story"} exact component={Story} />
            <Route
              path={URL_PREFIX + "/technologies"}
              exact
              component={Technologies}
            />
            <Route path={URL_PREFIX + "/contact"} exact component={Contact} />
            <Route path={URL_PREFIX + "/agenda"} exact component={Agenda} />
            <Route
              path={URL_PREFIX + "/portfolio"}
              exact
              component={Portfolio}
            />
            <Route
              path={URL_PREFIX + "/portfolio/case-study/:projectName"}
              exact
              component={CaseStudy}
            />
            <Route
              path={URL_PREFIX + "/being-cooked"}
              exact
              component={BeingCooked}
            />
            <Route
              path={URL_PREFIX + "/books-shelf"}
              exact
              component={BooksShelf}
            />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
