import React from "react";
import Header from "../Header/Header";
import "../../style/App/app.scss";
const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          Menü
        </div>
        <div className="row">
          <div className="col-8">Content</div>
          <div className="col-4">Hakkımda</div>
        </div>
        <div className="row">
         Footer
        </div>
      </div>
     
    </>
  );
};
export default App;
