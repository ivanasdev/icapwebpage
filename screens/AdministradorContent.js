import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AdminContent = () => {


const [nombre, setNombre] = useState("");
const [precio, setPrecio] = useState("");
const [superficie, setSuperficie] = useState("");
const [ubicacion, setUbicacion] = useState("");
const [plantas, setPlantas] = useState("");
const [habitaciones, setHabitaciones] = useState("");
const [sanitarios, setSanitarios] = useState("");
const [estacionamientos, setEstacionamientos] = useState("");
const [caracteristicas, setCaracteristicas] = useState("");
const [photos, setPhotos] = useState([]);

const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  
  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };
  
  // Add similar handle functions for other form fields
  
  const handlePhotosChange = (event) => {
    const files = Array.from(event.target.files);
    const base64Promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    });
  
    Promise.all(base64Promises).then((base64Images) => {
      const updatedPhotos = base64Images.map((base64Image) => ({
        nombre: nombre,
        image: base64Image,
      }));
      setPhotos(updatedPhotos);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create the data object with form values
    const data = {
      nombre: nombre,
      precio: precio,
      superficie: superficie,
      ubicacion: ubicacion,
      plantas: plantas,
      habitaciones: habitaciones,
      sanitarios: sanitarios,
      estacionamientos: estacionamientos,
      caracteristicas: caracteristicas,
      photos: photos,
    };
  
    // Send the POST request using axios
    axios
      .post("/your-api-endpoint", data)
      .then((response) => {
        // Handle the response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };
  
  



  return (
    <div className="container-fluid">
  <div className="card1">
    <div className="col-sm-12">
      <h5 className="card-title text-black">Administrador de contenidos</h5>
    </div>  
    <div className="row card-body">
      <div className="col-md-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label className="formadmin">Nombre de la propiedad</label>
              <input
                type="text"
                className="form-control"
      
                name="nombre"
                value={nombre}
                onChange={HandleInput}
              />
            </div>
            <div className="col-md-6">
              <label className="formadmin">Precio de la propiedad</label>
              <input
                type="number"
                className="form-control inputsim1"
             
                name="precio"
                value={precio}
                onChange={HandleInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="formadmin">
                Superficie 
              </label>
              <input
                type="text"
                className="form-control inputsim1"
          
                name="superficie"
                value={superficie}
                onChange={HandleInput}
              />
            </div>
            <div className="col-md-6">
              <label className="formadmin">Ubicación</label>
              <input
                type="text"
                className="form-control inputsim1"
            
                name="ubicacion"
                value={ubicacion}
                onChange={HandleInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="formadmin">Número de plantas</label>
              <input
                type="number"
                className="form-control inputsim1"

                name="plantas"
                value={plantas}
                onChange={HandleInput}
              />
            </div>
            <div className="col-md-6">
              <label className="formadmin">Habitaciones</label>
              <input
                type="number"
                className="form-control inputsim1"
       
                name="habitaciones"
                value={habitaciones}
                onChange={HandleInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="formadmin">Sanitarios</label>
              <input
                type="number"
                className="form-control inputsim1"
      
                name="sanitarios"
                value={sanitarios}
                onChange={HandleInput}
              />
            </div>
            <div className="col-md-6">
              <label className="formadmin">Estacionamientos</label>
              <input
                type="number"
                className="form-control inputsim1"

                name="estacionamientos"
                value={estacionamientos}
                onChange={HandleInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="exampleFormControlTextarea1">Características</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="caracteristicas"
                value={caracteristicas}
                onChange={HandleInput}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="exampleFormControlFile1" className="formadmin">
                Subir Fotos del inmueble
              </label>
              <input
                type="file"
                className="form-control-file"
                id="filephoto"
                name="photos"
                multiple
                onChange={fileshandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-success" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
</div>


  );
};

export default AdminContent;
