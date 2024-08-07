import React from "react";
import ReactDOM from "react-dom";
import PDPContent from "./PDPContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";

import Header from "home1/Header";
import Footer from "home1/Footer";
import "remixicon/fonts/remixicon.css";

const App = () => (
  <Router> 
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />      
      <div className="my-10"> 
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
