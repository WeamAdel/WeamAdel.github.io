import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/technologies" exact component={Technologies}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
