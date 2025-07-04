import React, { useState } from 'react'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import {Routes, Route} from 'react-router'
import ContactScreen from '../Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from '../Screens/ContactDetailScreen/ContactDetailScreen'
import { getContactList } from '../Components/Services/contactService'
import { getMessagesByContactId } from '../Components/Services/messagesService'
function App() {
	
	

	return (
		<div>
			<h1>Bonsoir le monde 🌐</h1>
			<Routes>
				
				<Route
					path='/contacts/:contact_id/messages' /* Configuramos el prametro de busqueda :contact_id */
					element={<HomeScreen/>} 
				/>
				<Route 
					path='/contacts'
					element={<ContactScreen/>}
				/>
				<Route
					path='/contact-detail'
					element={<ContactDetailScreen/>}
				/>
			</Routes>
		</div>
	)
}

export default App





