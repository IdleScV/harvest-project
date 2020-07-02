import React from 'react';
import Button from '@material-ui/core/Button';

function HomeScreen({ SetCurrentPage }) {
	return (
		<div id="home-screen">
			<Button
				onClick={() => SetCurrentPage('harvest-now')}
				className="home-button"
				variant="contained"
				color="primary"
			>
				Harvest Now
			</Button>

			<Button className="home-button" variant="contained" color="primary">
				Harvest Batches
			</Button>
		</div>
	);
}

export default HomeScreen;
