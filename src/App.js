import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.component';
import HomeScreen from './components/HomeScreen.component';
import HarvestNow from './components/HarvestNow.component';
import HarvestForm from './components/HarvestForm.component';

const initialState = {
	plants: [ 'OG', 'Bubba', 'Strawberry' ]
};

function App() {
	const [ currentPage, SetCurrentPage ] = useState('home');
	const [ plantData, plantDatSet ] = useState(initialState.plants);

	return (
		<div className="App">
			<div id="orange-bar" />
			<Header />
			{currentPage === 'home' ? (
				<HomeScreen SetCurrentPage={SetCurrentPage} />
			) : currentPage === 'harvest-now' ? (
				<HarvestForm plantData={plantData} />
			) : null}

			<div id="bottom-logo">Logo</div>
		</div>
	);
}

export default App;
