import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";
import Header from "home1/Header"
import Footer from "home1/Footer"
import CartContent from "./CartContent";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
