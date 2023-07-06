






/*
import React, {useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import qs from "qs";

const UploadPhotos = () => {
    const location = useLocation();
const params = qs.parse(location.search, { ignoreQueryPrefix: true });
const nombre = params.nombre;
const [photos, setPhotos] = useState([]);
const URI = "http://45.80.153.150:5002";




  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
   
  };


  
  const sendPhoto = () => {
    if (photos.length === 0) {
      console.log("No hay fotos");
    } else {
      const formdata = new FormData();
      formdata.append("files", photos);
      formdata.append("nombre", nombre);
      console.log(photos)

      /*
      fetch(`${URI}/imagenes`, {
        method: "POST",
        body: formdata,
      })
        .then((response)=>{
            if (response.ok) {
                return response.text();
              } else {
                throw new Error("Error en la solicitud POST");
              }
        })
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
  


    }
  };
  



  return (
    <div className="container-fluid">
      <div className="card1">
        <div className="col-sm-12">
          <h5 className="card-title text-black">Administrador de contenidos{nombre}</h5>
     <form onSubmit={sendPhoto}>
     <div className="row">
                <div className="col-md-12">
                  <label
                    htmlFor="exampleFormControlFile1"
                    className="formadmin"
                  >
                    Subir Fotos del inmueble
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="filephoto"
                    name="photos"
                    multiple
                    onChange={handlePhotosChange}
                  />
                </div>
          
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-success" type="submit">
                    Guardar
                  </button>
                </div>
              </div>
        </div>
     </form>
        </div>
     
      </div>
    </div>
  );
};

export default UploadPhotos;


*/


import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import qs from "qs";


const ImageUploader = () => {

  const URI = "http://45.80.153.150:5002";


    const location = useLocation();
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    const nombre = params.nombre;
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  console.log(nombre)

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);

    const images = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(images);
  };

  const handleUpload = () => {
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append('images', file);
      formData.append('nombre', nombre); 
    });


    for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

    
    fetch(`${URI}/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        // Aquí puedes manejar la respuesta del servidor
        console.log(response);
      })
      .catch((error) => {
        // Aquí puedes manejar los errores
        console.error(error);
      });
      
    }
  

  return (

    <div className="container-fluid">
    <div className="card1">
      <div className="col-sm-12">
        <h5 className="card-title text-black">Administrador de contenidos</h5>

        <div className='container'>
            <div className='col-12 col-md-12'>
            <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir imágenes</button>

    </div>
    <div className='card1'>

      {previewImages.map((image, index) => (
        <img key={index} src={image} alt={`Preview ${index}`} width="200" />
      ))}
    </div>

            </div>

        </div>


    </div>
    </div>
    </div>
    
  );
};

export default ImageUploader;
