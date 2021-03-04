import React, { lazy, Suspense } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Nav from "../components/nav";
import Home from "./home";
const About = lazy(() => import("./about"));

function Routes() {
  return (
    <div>
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default Routes;
