import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HeroSelectorPage from "./HeroSelectorPage";
import HeroCalculatorPage from "./HeroCalculatorPage";

const Routes = () => {
  return (
    <Fragment>
      <Route exact path="/" component={HeroSelectorPage} />
      <Route
        exact
        path="/:name"
        component={({ match }: any): JSX.Element => (
          <HeroCalculatorPage name={match.params.name} />
        )}
      />
    </Fragment>
  );
};

export default Routes;
