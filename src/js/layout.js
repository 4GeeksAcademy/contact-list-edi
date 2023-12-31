import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import CreateContactPage from "./views/createContact.js";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import ShowEachContact from "./views/showEachContact.js";
import EditContact from "./component/editContact.jsx";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create-contact" element={<CreateContactPage />} />
						<Route path="/contact/:id" element={<ShowEachContact />} />
						<Route path="/editContact/:id" element={<EditContact/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
