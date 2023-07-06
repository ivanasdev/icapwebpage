import React, { useState } from "react";
//import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import logo from '../assets/img/icapicon.png'
import { useNavigate } from "react-router-dom";
//import md5 from "md5";
const initialState={
    email:"",
    password:""
};

const LoginAdmin=()=>{
   
    const [state,setState]=useState({initialState})
    const navigate = useNavigate();
    const {email,password}=state

    
        
  

    
    const HandleInput = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
    const HandleSubmit=(e)=>{
        e.preventDefault();
        if(!email || !password){
            toast.error("Por favor llene todos los campos");
        }
        else
        {
            axios
            .post("http://45.80.153.150:5002/loginadmin",{
                email,
                password 
            })
            .then(response=>{
                console.log(response)
                console.log(email,password)
                console.log(response.data.length )
                if(response.data.length == 0 ){
                    console.log("Error de user")
                    toast.error("Usuario o clave invalida");
                }
                else{
                    setState({
                        email:"",
                        password:""

                      })
                      setTimeout(() => navigate("/administradorcontent"), 500);
                      toast.success("Se guardo con exito el contenido");
                      
                    console.log("Usuario logeado")
                }
              
            })
          

    
         
            
        
        
            
            

        }



    }





    return(

        
    <div className="container-fluid">
    <div className="intro">
      <img className="imglogoinvest row" src={logo} />
      
<div className="row">
<div className="col-sm-12">
  <div className="invest">
    <div className="card-body ">
      <h5 className="card-title garant ">Atenticate para ra administrar el contenido</h5>
      
      <form onSubmit={HandleSubmit}>
      <div className="mb-3">
        <label  className="form-label">email</label>
        <input 
        type="text" 
        name="email" 
        value={email}
        onChange={HandleInput}
        className="form-control"
         placeholder="" 
         aria-describedby="helpId" />
        <small id="helpId" className="text-muted">Help text</small>
      </div>
      <div className="mb-3">
        <label  className="form-label">Clave de acceso</label>
        <input
         type="password"
          className="form-control"
           name="password" 
           value={password}
           onChange={HandleInput}
           
           placeholder="" />
      </div>
      
      <button className="btn bt11" type="submit">Iniciar Sesi&oacute;n</button>


      </form>





      
    </div>
  </div>
</div>

</div>
  
</div>

  </div>



    )
}

export default LoginAdmin