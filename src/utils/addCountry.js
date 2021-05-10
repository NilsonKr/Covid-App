const addCountry = (choosen, country) => {
	const exists = choosen.find(item => item.country === country.country);

	if (exists) {
		return choosen;
	}

	return [...choosen, country];
};

export default addCountry;
