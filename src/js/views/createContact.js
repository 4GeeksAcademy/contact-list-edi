import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const CreateContactPage = () => {
	const { store, actions } = useContext(Context);
	const [nombre,setNombre] = useState("")
	const [email,setEmail] = useState("")
	const [phone,setPhone] = useState("")
	const [adress,setAdress] = useState("")

	
	const pressSubmit = (e, nombre, email, phone, adress) => {
		e.preventDefault();
		actions.addContact(nombre, email, phone, adress);
			setNombre("");
			setEmail("");
			setPhone("");
			setAdress("")
	};

	return (
		<div className="container mt-5">
			<h1 className="text-center">Add a new contact</h1>
			<div className="col-12 ">

				<form>
			<label>Full name </label> <br/>
			<input
				className="col-12 mt-2"
				placeholder="Full name"
				value={nombre}
				onChange={(e)=>{
					setNombre(e.target.value)
				}}
			/>

			<label className="mt-3">Email</label> <br/>
			<input
				className="col-12 mt-2"
				placeholder="Email"
				value={email}
				onChange={(e)=>{setEmail(e.target.value)}}

			/>
			<label className="mt-3">Phone</label> <br/>
			<input
				className="col-12 mt-2"
				placeholder="Phone"
				value={phone}
				onChange={(e)=>{setPhone(e.target.value)}}

			/>
			<label className="mt-3">Adress</label> <br/>
			<input
				className="col-12 mt-2"
				placeholder="Adress"
				value={adress}
				onChange={(e)=>{setAdress(e.target.value)}}

			/>
			<input type="button" value="Save" className="col-12 mt-4 bg-primary rounded text-light"  onClick={e => {
							pressSubmit(e, nombre, email, phone, adress);
							actions.createContact()
						}}/>

			</form>
			<br/>

			<Link style={{textDecoration: "none"}} to="/">or back home</Link>
			</div>
		</div>
	);
};

export default CreateContactPage;
