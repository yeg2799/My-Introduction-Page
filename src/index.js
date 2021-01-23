import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
    <LazyApp />
    </Suspense>
  ,
  document.getElementById("root")
);
