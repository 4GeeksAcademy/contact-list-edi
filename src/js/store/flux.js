import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			contact: 
				{
					full_name:null ,
					email:null,
					phone:null,
					address: null,
					agenda_slug: "edi_agenda",
				}
			,
			contactList: [],
			agenda_slug: "edi_agenda"
		},
		actions: {
			addContactList: (arr) =>{
				const store= getStore()
				setStore({contactList: [...store.contactList, arr]})
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addContact : (nombre,email,phone,adress) =>{
				const store= getStore()
				store.contact.full_name= nombre,
				store.contact.email=email,
				store.contact.phone=phone,
				store.contact.address=adress
			},
			createContact: () =>{
				const store= getStore()
				fetch('https://assets.breatheco.de/apis/fake/contact/', {
					method: 'POST', 
					headers:{
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(store.contact),
					}).then((res)=> res.json())
					.then(resAsJson => {
						console.log(resAsJson);
						return resAsJson.id, // Devuelve el ID del contacto creado
						console.log(resAsJson.id);
					}).catch((error)=>{
						console.log(error);
					})
			},
			
			showContacts: (contactId) =>{
					fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`, {
						method: 'GET', 
						headers:{
							'Content-Type': 'application/json'
						},
						}).then((res)=> res.json())
						.then(resAsJson => {
							console.log(resAsJson);
						}).catch((error)=>{
							console.log(error);
						})	
			},
			deleteContact:  (contactId) =>{
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

		}
	};
};

export default getState;
