import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import bouteille from "../../element/bouteille.png";
import panier from "../../element/panier.png";
import logo from "../../element/logo-terradona.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
