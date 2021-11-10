import React from "react";
import "../App/App.css";
import logo from "../../element/logo-terradona.png";


const Header = () => {
  return (
    <header>
      <div class="cliiink">
      <img src={logo} alt="logo terradona" />{" "}  
      </div>
      <div class="drop">
        <button class="dropbutton">MENU</button>
        <div class="container-button small_shadow">
          <a href="#">Principauté de Monaco</a>
          <a href="#">Communauté d'Agglomération du Pays de Grasse</a>
          <a href="#">Communauté d'Agglomération Lens-Liévin</a>
          <a href="#">Communauté de Communes de la Save au Touch</a>
          <a href="#">Communauté d'Agglomération Roannais Agglomération</a>
          <a href="#">Communauté de Communes du Pays Réuni d'Orange</a>
          <a href="#">Communauté d'Agglomération Cannes Pays de Lérins</a>
          <a href="#">Syndicat du SICTOM de la Région Montluçonnaise</a>
          <a href="#">
            Communauté d'Agglomération Durance Luberon Verdon Agglomération
          </a>
          <a href="#">Communauté de Communes Normandie Cabourg Pays d'Auge</a>
          <a href="#">Communauté d'Agglomération Terre de Provence</a>
          <a href="#">Syndicat du SIDOMRA</a>
          <a href="#">Communauté Urbaine de Limoges Métropole</a>
          <a href="#">Communauté d'Agglomération d'Amiens Métropole</a>
          <a href="#">Syndicat du SIRTOMAD</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
