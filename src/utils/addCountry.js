const addCountry = (choosen, country) => {
	const exists = country.isAdded;

	//Remove Data
	if (exists) {
		const index = choosen.findIndex(item => item.country === country.country);
		//Return a new Array with modified Data
		const newChoosen = [...choosen];
		newChoosen.splice(index, 1);

		return newChoosen;
	}

	return [...choosen, country];
};

export default addCountry;
