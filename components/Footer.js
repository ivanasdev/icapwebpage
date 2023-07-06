import React from "react";

//import logo from "../assets/img/icapicon.png"
import logowhts from "../assets/icons/whatsapp.png";
import { Link } from "react-router-dom";
import logofooter from "../assets/img/INMOBICAPITALPOSITIVO.png";
import logofb from "../assets/icons/facebook.png";
import logoinsta from "../assets/icons/instagram.png";
import logolink from "../assets/icons/linkedin.png";
import logoyou from "../assets/icons/youtube.png";
import logotik from "../assets/icons/tik-tok.png";
const Footer = () => {
  return (

    <div class="card-footer text-center">
      <div class="row">
    
            <div className="col-sm-12">
          
            <p className="card-textf">55 8930 9248</p>
            <p className="card-textf">contacto@inmobicapital.com</p>
            <p className="card-textf">
            <a href="https://goo.gl/maps/YmAm6MU6WDrjBgSGA" className="card-text">
              Lago Alberto 442, Anáhuac I Secc, Miguel Hidalgo, 11320 Ciudad de
              México, CDMX
            </a>
            </p>
            </div>
       
            <div className="col-3 col-md-2">
                <a
                  title="Click para chatear"
                  href="https://www.facebook.com/InmobiCapital/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={logofb} className="img-fluid logowhts" />
                </a>
              </div>
              <div className="col-3 col-md-2">
                <a
                  title="Click para chatear"
                  href="https://www.instagram.com/inmobicapital/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={logoinsta} className="img-fluid logowhts" />
                </a>
              </div>
              <div className="col-3 col-md-2">
                <a
                  title="Click para chatear"
                  href="https://www.linkedin.com/company/inmobicapitalm%C3%A9xico/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={logolink} className="img-fluid logowhts" />
                </a>
              </div>
              <div className="col-3 col-md-2">
                <a
                  title="Click para chatear"
                  href="https://www.youtube.com/channel/UCRcB9WFjRgcP3TuvXua0ecQ/videos"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={logoyou} className="img-fluid logowhts" />
                </a>
              </div>
              <div className="col-3 col-md-2">
                <a
                  title="Click para chatear"
                  href="https://www.tiktok.com/@inmobicapital"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={logotik} className="img-fluid logowhts" />
                </a>
              </div>
              <div className="col-3 col-md-2">
              <a
              title="Click para chatear"
              href="https://api.whatsapp.com/send?phone=5630301540.&text=¡Hola!%20Me%20gustaría%20más%20información."
              target="_blank"
              rel="noopener"
            >
              <img src={logowhts} className="img-fluid logowhts" />
            </a>
            </div>
       
        
      




       
      </div>

      <div class="  ">
        <p>© 2023 InmobiCapital. Todos los derechos reservados.</p>
      </div>
    </div>



  );
};

export default Footer;
