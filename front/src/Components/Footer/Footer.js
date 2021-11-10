import React from "react";
import "../App/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <div>
      <div>
        <footer id="footer" class="conteneur">
            <p>
              TEAM 12 : Siham Chentouf | Elisa Morillon | Fatima Elmouhine | Ifanl
              Ibrahim | Julien Bruno
            </p>
            <div class="backtop center">
                <a href="#" title="Voir le sommet de la page">
                ↑ 
                  <i>   <faArrowUp icon="fas fa-arrow-up" /> </i>
                  <faArrowUp icon={['fas', 'arrow-up']} />
                  <FontAwesomeIcon icon={('arrow-up')} />

                </a>
            </div>
        </footer>
        </div>
    </div>
    
  );
};

export default Footer;
