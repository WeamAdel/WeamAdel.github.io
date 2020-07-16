import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/Home/Home";
import Technologies from "./components/Technologies/Technologies";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/technologies" exact component={Technologies}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
