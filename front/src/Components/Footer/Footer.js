import React from "react";
import "../App/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
=======
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

>>>>>>> 2d3d234b518640e8e7f9be1582570defad072ce5

const Footer = () => {
  return (
    <div>
      <div>
        <footer id="footer" class="conteneur">
<<<<<<< HEAD
          <p>
            TEAM 12 : Siham Chentouf | Elisa Morillon | Fatima Elmouhine | Ifanl
            Ibrahim | Julien Bruno
          </p>
          <div class="backtop center">
            <a href="#" title="Voir le sommet de la page">
              ↑
              <i>
                {" "}
                <faArrowUp icon="fas fa-arrow-up" />{" "}
              </i>
              <faArrowUp icon={["fas", "arrow-up"]} />
              <FontAwesomeIcon icon={"arrow-up"} />
            </a>
          </div>
        </footer>
      </div>
    </div>
=======
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
    
>>>>>>> 2d3d234b518640e8e7f9be1582570defad072ce5
  );
};

export default Footer;
