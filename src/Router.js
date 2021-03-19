import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spinner } from "reactstrap";
import { history } from "./history";

const AppHome = lazy(() => import("./pages/App/App"));
const AboutMe=lazy(()=> import("./pages/Content/Aboutme"));
const MyProjects=lazy(()=> import("./pages/Content/MyProject"));
const Blogs=lazy(()=> import("./pages/Content/Blog"));
const BlogSingle=lazy(()=> import("./pages/Content/BlogPageSingle"));
const Contact=lazy(()=> import("./pages/Content/Contact"));
const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Spinner color="success" style={{display:"flex",alignItems:"center",justifyContent:"center"}}/>}>
        <Switch>
          <Route  path="/" component={AppHome} />
          <Route  path="/hakkimda" component={AboutMe} />
          <Route  path="/projelerim" component={MyProjects} />
          <Route  path="/blog" component={Blogs} />
          <Route  path="/blog/:id"  render={(props) => <BlogSingle {...props} />} component={BlogSingle}/>
          <Route  path="/iletisim" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
