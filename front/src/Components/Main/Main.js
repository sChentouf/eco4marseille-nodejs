import React from "react";
import { useEffect, useState } from "react";
import "../App/App.css";

// <script>
const axios = require("axios");
// const { json } = require("body-parser");
// //console.log(option, select);
// // const text = option.textContent;

// function fetchInfos() {
// let option = document.getElementById("commu").value;
// return new Promise((resolve, reject) => {
// var data = JSON.stringify({
// option,
// });
// console.log(data);
// axios(
// {
// url: `http://localhost:3006/communaute/${option}`,
// headers: {
// "Content-Type": "application/json",
// "Content-Length": data.length,
// "Access-Control-Allow-Origin": "*",
// }
// }
// ).then((response) => {
// console.log("toto");
// resolve();
// })
// .catch((error) => {
// console.warn(error);
// reject(error);
// });
// });
// }
// </script>

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [ip, setIp] = useState(0);
  const [tf, setTf] = useState(true);
  console.log("zerty");
  var rez = {};
  useEffect(() => {
    axios.get("http://localhost:3007/local").then((response) => {
      if (response.data) {
        //setUserData(response.data);
        console.log(response);
        setUserData(response.data);
      }
    });
  }, [!userData]);
  function fff(vd) {
    console.log("rr");
    setIp(vd);
  }
  if (userData[ip]) {
    return (
      <div>
        <div>
          <div class="center barresearch">
            <form>
              <label for="commu">Selectionner une collectivité</label>
              <select
                name="communaute"
                id="commu"
                onChange={(e) => fff(e.target.value)}
              >
                <option value="0">Principaute de Monaco</option>

                <option value="1">
                  Communauté d'Agglomération du Pays de Grasse
                </option>
                <option value="2">
                  Communauté d'Agglomération Lens-Liévin
                </option>
                <option value="3">
                  Communauté de Communes de la Save au Touch
                </option>
                <option value="4">
                  Communauté d'Agglomération Roannais Agglomération
                </option>
                <option value="5">
                  Communauté de Communes du Pays Réuni d'Orange
                </option>
                <option value="6">
                  Communauté d'Agglomération Cannes Pays de Lérins
                </option>
                <option value="7">
                  Syndicat du SICTOM de la Région Montluçonnaise
                </option>
                <option value="8">
                  Communauté d'Agglomération Durance Luberon Verdon
                  Agglomération
                </option>
                <option value="9">
                  Communauté de Communes Normandie Cabourg Pays d'Auge
                </option>
                <option value="10">
                  Communauté d'Agglomération Terre de Provence
                </option>
                <option value="11">Syndicat du SIDOMRA</option>
                <option value="12">
                  Communauté Urbaine de Limoges Métropole
                </option>
                <option value="13">
                  Communauté d'Agglomération d'Amiens Métropole
                </option>
                <option value="sirtomad">Syndicat du SIRTOMAD</option>
              </select>
            </form>
          </div>
        </div>
        <div class="row titleup center">
          <div class="title col-6 col-sm-6 col-md-6">
            <h1>
              Amelioration du <span class="txt_orange">tonnage</span>
            </h1>
          </div>
          <div class="datebox col-6 col-sm-6 col-md-6">
            <h2>
              <i class="fas fa-calendar-alt txt_bleu"></i>{" "}
              {userData[ip].createdAt} to 10.11.2021
            </h2>
            <h3>
              <i class="fas fa-box txt_bleu"></i>{" "}
              <span>{userData[ip].nb_boxes}</span> box installées
            </h3>
          </div>
        </div>
        <section class="row conteneur center">
          <div class="card col-md-12 text-center">
            <div class="card-body">
              <h2 class="card-title">Nombre de foyer utilisateur</h2>
              <h3 id="nb2" class="card-text txt_bleu">
                {userData[ip].nb_users}
              </h3>

              <p>
                <span class="txt_orange">18%</span> population{" "}
                <span class="txt_orange"> est responsable</span>
              </p>
              <div id="SkillBox">
                <div class="SkillBar">
                  <div id="Skill-responsable">
                    <span class="Skill-responsable "></span>
                    <span class="PercentText "></span>
                  </div>
                </div>

                <p>
                  <span class="txt_bleu">45%</span> du geste du tri au niveau de
                  la collectivité
                </p>
                <div class="SkillBar">
                  <div id="Skill-collectivité">
                    <span class="Skill-Area "></span>
                    <span class="PercentText "></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card col-md-5 col-sm-5 text-center">
              <div class="card-body">
                <h2 class="card-title">Nombre de dépôts valides</h2>
                <h3 class="card-text txt_bleu">
                  {userData[ip].nb_deposits_cliiink}
                </h3>
              </div>
            </div>
            <div class="card col-md-5 col-sm-5 text-center">
              <div class="card-body">
                <h2 class="card-title">Croissance du tri du verre</h2>
                <h3 class="card-text txt_bleu">
                  <span class="txt_orange">+ </span>6,1kg
                </h3>
                <p>/an/hab</p>
                <i class="fas fa-sort-amount-up txt_orange"></i>
              </div>
            </div>
          </div>
          <div class="row col-lg-12 center relatif">
            <div class="relatif">
              <img
                class="col-9 relatif"
                src="./element/bouteille.png"
                alt="Tonnes de verre"
              />
            </div>
            <figcaption class="absolue position_bouteille txt_blanc">
              Au total{" "}
              <span class="txt_orange">
                {" "}
                + de <span>888</span> tonnes{" "}
              </span>{" "}
              de verre recyclé
            </figcaption>

            <div class="relatif">
              <img
                class="col-9 relatif"
                src="./element/panier.png"
                alt="Nombre de souscription"
              />
            </div>
            <figcaption class="absolue position_panier txt_blanc">
              <span class="txt_orange">
                <span>{userData[ip].nb_subscriptions}</span> souscription{" "}
              </span>{" "}
              entrainant un acte d'achat
            </figcaption>
          </div>
          <div class="card col-md-12 col-xs-12 text-center">
            <div class="card-body">
              <h2 class="card-title">
                Soit <span class="txt_orange">l'économie</span> de
              </h2>
              <p class="card-text">
                <i class="fas fa-cloud txt_bleu"></i>
                <span class="txt_bleu"> 707</span> tonnes de CO2
              </p>
              <p class="card-text">
                <i class="fas fa-tint txt_bleu"></i>
                <span class="txt_bleu"> 847 000</span> litres d'eau
              </p>
              <p class="card-text">
                <i class="fas fa-mobile-alt txt_bleu"></i>
                <span class="txt_bleu"> 989</span> smartphone
              </p>
            </div>
          </div>
          {/* //{" "}
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1bANAx0_1qK6tlRm6tgFhxT1_3N9yZTO_"
          width="640"
          height="480"
        /> */}
        </section>
      </div>
    );
  } else return "";
};

export default Main;
