import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { useParams } from "react-router";

const ShowEachContact = () => {

    const params = useParams();
    const [contact, setContact] = useState()

    useEffect(() => {
        fetchSingleContact();
    },[])


    const fetchSingleContact = () => {
        fetch('https://assets.breatheco.de/apis/fake/contact/' + params.id, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((res)=> res.json())
			.then(resAsJson => {
				console.log(resAsJson);
				setContact(resAsJson)
			}).catch((error)=>{
				console.log(error);
			})
    }

    return (
        <div className="text-center mt-5">
            <h1>Contact</h1>
            {contact ? (
                <div className="container-fluid col-3">
                    <div class="card mt-5" >
                        <img src="https://picsum.photos/id/254/300/300"  class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h3>{contact.full_name}</h3>
                            <p>{contact.email}</p>
                            <p>{contact.phone}</p>
                            <p>{contact.address}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    )
};

export default ShowEachContact;