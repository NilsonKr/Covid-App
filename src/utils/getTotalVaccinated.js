const getTotal = countrie => {
	const lastRegister = countrie.data[countrie.data.length - 1];

	if (lastRegister.total_vaccinations) {
		return lastRegister.total_vaccinations.toLocaleString('de-DE');
	}

	if (lastRegister.people_vaccinated) {
		return lastRegister.people_vaccinated.toLocaleString('de-DE');
	}

	return '-';
};

export default getTotal;
