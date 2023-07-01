import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const Editcontact = () => {
    const param = useParams()
	const [nombre,setNombre] = useState("")
	const [email,setEmail] = useState("")
	const [phone,setPhone] = useState("")
	const [adress,setAdress] = useState("")

	useEffect(()=>{
		console.log(param);
	 	getAContact()
	},[])
	

    

	const getAContact =  () =>{
		fetch('https://assets.breatheco.de/apis/fake/contact/' + param.id, {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				console.log(resAsJson);
				setNombre(resAsJson.full_name)
				setEmail(resAsJson.email)
				setPhone(resAsJson.phone)
				setAdress(resAsJson.address)
			}).catch((error)=>{
				console.log(error);
			})
	}

	const editContct=() =>{
		fetch('https://assets.breatheco.de/apis/fake/contact/' + param.id, {
			method: 'PUT', 
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				{
					full_name: nombre,
					email: email,
					agenda_slug: "edi_agenda",
					address: adress,
					phone: phone
			}
						),
			}).then((res)=> res.json())
			.then(resAsJson => {
				console.log(resAsJson);
			}).catch((error)=>{
				console.log(error);
			})
	}

	return (
		<div className="container mt-5">
			<h1 className="text-center">Edit contact</h1>
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
							editContct(),
							getAContact()
						}}/>

			</form>
			<br/>

			<Link style={{textDecoration: "none"}} to="/">or back home</Link>
			</div>
		</div>
	);
};

export default Editcontact;