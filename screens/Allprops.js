import React, { useState, useEffect } from "react";
//import "./Home.css";
import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import NavBarP from "../components/NavBarProp";
import Footer from "../components/Footer";
//import CarouselHome from "../componets/CarouselHome";
import * as imageConversion from "image-conversion";
const Allprops = () => {
  const [data, setData] = useState([]);
  // const [imagen, setImagen] = useState([]);

  /*
  const loadImg = () => {
    fetch("http://45.80.153.150:5002/getimagenes", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setImagen(res))
      .catch((err) => {
        console.log(err);
      });
  };*/

  const loadData = async () => {
    const response = await axios.get("http://localhost:5002/getprops");
    setData(response.data);
    //console.log(response.data)
  };

  useEffect(() => {
    //loadImg();
    loadData();
  }, []);

  const convertBufferToImage = (bufferData) => {
    const byteArray = new Uint8Array(bufferData);
    const blob = new Blob([byteArray], { type: "image/png" });
    //const imageUrl = URL.createObjectURL(blob);
    console.log(blob)
    return blob;

  };




  return (
    <div classNameName="container-fluid ">
      <NavBarP />

      <div className="row ">
        {data.map((item, index) => {
          for (let i = 0; item; i++) {
            const imageUrl = convertBufferToImage(item.data);
       

            // byteArray = new Uint8Array(item.Photo_Data);
           // const blob = new Blob([byteArray], { type: "image/png" });
           // const imageUrl = URL.createObjectURL(blob);
    

           
     

            const id = item.id_Propiedad;
            return (
              <div className="col-sm-4">
                <div className="cardprops">
                  <h2 className="card-title h2propsnombre">
                    {item.st_NombrePropiedad}
                  </h2>
                  <div class="image-container">
                  {/*
                  <img className="card-img-top img-fluid" src={imageUrl} alt="Imagen" />
               
                  <img class="card-img-top img-fluid" src={"http://45.80.153.150:5002/" + item.st_NombrePropiedad + ".jpeg"} alt="Imagen" />*/}
                    <div class="image-text">
                      <p className="">${item.i_Precio}</p>
                    </div>
                  </div>

                  <p className="card-content h5propsnombre">
                    {item.st_Ubicacion}
                  </p>
                  <p className="card-content h5propsnombre">
                    {item.st_Superficie} m2
                  </p>
                  <p className="card-content h5propsnombre">
                    Plantas:{item.i_Plantas}
                  </p>
                  <p className="card-content h5propsnombre">
                    Habitaciones :{item.i_Habitaciones}
                  </p>
                  <p className="card-content cardprops1  "></p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Allprops;
