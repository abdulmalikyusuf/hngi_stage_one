import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles.css'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Router>
			<Routes>
				<Route index element={<Home/>}/>
				<Route path='/contact' element={<Contact/>}/>
			</Routes>
		</Router>
	)
}

export default App
