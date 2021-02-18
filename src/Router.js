import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spinner } from "reactstrap";
import { history } from "./history";

const AppHome = lazy(() => import("./components/App/App"));


const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Spinner color="success" style={{display:"flex",margin:"0 auto"}}/>}>
        <Switch>
          <Route exact path="/" component={AppHome} />
          <Route exact path="/hakkimda" component={AppHome} />
          <Route exact path="/projelerim" component={AppHome} />
          <Route exact path="/blog" component={AppHome} />
          <Route exact path="/iletisim" component={AppHome} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
