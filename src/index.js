import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Spinner } from "reactstrap";
const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
    <Suspense fallback={<Spinner color="success"/>}>
    <LazyApp />
    </Suspense>
  ,
  document.getElementById("root")
);
