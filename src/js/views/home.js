import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/contactCard.jsx";



export const Home = () => {

	const { store, actions } = useContext(Context);
	const [contactList, setContactList] = useState([])
	const navigate = useNavigate()

	const getAllContacts=() =>{
		fetch('https://assets.breatheco.de/apis/fake/contact/agenda/' + store.agenda_slug, {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			},
			}).then((res)=> res.json())
			.then(resAsJson => {
				console.log(resAsJson);
				setContactList(resAsJson)
			}).catch((error)=>{
				console.log(error);
			})
	}

	const deleteContact = (contactId) =>{
        fetch('https://assets.breatheco.de/apis/fake/contact/' + contactId, {
			method: 'DELETE', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				console.log(resAsJson);
				getAllContacts()
			}).catch((error)=>{
				console.log(error);
			})
    }
	
	useEffect(()=>{
		getAllContacts(),
		actions.addContactList(contactList)
	},[])

	const showContact = () =>{
		return contactList.map((item,index)=>{
			return(
					<li key={index}> 
						<ContactCard delete={() => deleteContact(item.id)}
									  id={item.id}
									  name={item.full_name} phone={item.phone} 
									  email={item.email} adress={item.address}  
									  url="https://picsum.photos/seed/picsum/200/200" />
					</li>
			)
		})
	}

	return(
		<div className="container-fluid">
			<div className="d-flex justify-content-between mt-5">
				<h1>My Contact List</h1>
				<button className="btn btn-success" onClick={() => navigate('/create-contact')}>
					Add new Contact
				</button>
			</div>
			<ul className="contactList">
				{showContact()}
			</ul>
				
		</div>
	)

	};
