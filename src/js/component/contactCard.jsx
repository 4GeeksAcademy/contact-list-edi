import React from "react";
import { Link } from "react-router-dom";

const ContactCard =(props)=>{
   
    return( 
        <div className="container-fluid d-flex justify-content-center mt-5">
            <div class="card mb-3 col-11">
                <div class="row g-0 p-3">
                    <div class="col-md-2">
                    <img src={props.url} class="img-fluid portada" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body mx-5">
                            <Link style={{textDecoration: "none" , color: "grey"}} to={`/contact/${props.id}`}> <h3 class="card-title mb-3"> {props.name} </h3></Link> 
                            <p class="card-text adress"><i class="fas fa-map-marker-alt me-3"></i>{props.adress}</p>
                            <p class="card-text phone"><i class="fas fa-phone me-3"></i>{props.phone}</p>
                            <p class="card-text email"><i class="fas fa-envelope me-3"></i>{props.email}</p>  
                        </div>
                    </div>
                    <div class="col-md-2 ">
                        <i class="fas fa-trash-alt" onClick={props.delete}></i>
                        <i class="fas fa-pencil-alt mx-5 mt-4" onClick={props.edit}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;