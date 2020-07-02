import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
function HarvestForm({ plantData }) {
	const [ firstDropDown, SetfirstDropDown ] = useState('Ends With');
	const [ firstInputField, SetfirstInputField ] = useState(null);

	const handleFirstChange = (e) => {
		SetfirstDropDown(e.target.value);
	};

	return (
		<div id="harvest-form">
			<div className="top-form">
				<Select native value={firstDropDown} onChange={handleFirstChange}>
					<option value="Ends With">Ends With</option>
					<option value="Contains">Contains</option>
				</Select>
				<Input value={firstInputField} onChange={(e) => SetfirstInputField(e.target.value)} />
				{plantData.filter((x) => x.includes(firstInputField)).map((plant) => <h2>{plant}</h2>)}
			</div>
		</div>
	);
}

export default HarvestForm;
