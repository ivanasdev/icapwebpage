import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  nombre: "",
  precio: "",
  superficie: "",
  ubicacion: "",
  plantas: "",
  habitaciones: "",
  sanitarios: "",
  estacionamientos: "",
  caracteristicas: "",
};

const AdminContent = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const gotoup=()=>{
    navigate(`/upphoto?nombre=${nombre}`);

  }

  const URI = "http://45.80.153.150:5002";

  const {
    nombre,
    precio,
    superficie,
    ubicacion,
    plantas,
    habitaciones,
    sanitarios,
    estacionamientos,
    caracteristicas,
  } = state;

  const HandleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !nombre ||
      !precio ||
      !superficie ||
      !ubicacion ||
      !plantas ||
      !habitaciones ||
      !sanitarios
 
    ) {
      alert("Por favor llene todos los campos y seleccione al menos una foto");
    } else {
      axios
        .post(`${URI}/admindata`, {
          nombre,
          precio,
          superficie,
          ubicacion,
          plantas,
          habitaciones,
          sanitarios,
          estacionamientos,
          caracteristicas,
        })
        .then((response) => {
          console.log(response.data);
          setState(initialState);
          gotoup()
          console.log("Se guardó con éxito el contenido");
         
        })
        .catch((error) => {
          console.log(error);
          alert("Hubo un error al guardar el contenido");
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="card1">
        <div className="col-sm-12">
          <h5 className="card-title text-black">Administrador de contenidos</h5>
        </div>
        <div className="row card-body">
          <div className="col-12 col-md-12">
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
                  <label className="formadmin">Superficie</label>
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
                  <label htmlFor="exampleFormControlTextarea1">
                    Características
                  </label>
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
                  <button className="btn btn-success" type="submit">
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-12"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
