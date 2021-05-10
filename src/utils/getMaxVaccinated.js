const getMax = countries => {
	let vaccinated = [];

	for (let i = 0; i < countries.length; i++) {
		countries[i].data.forEach(vaccines =>
			vaccinated.push(vaccines.daily_vaccinations || 0)
		);
	}

	return Math.max(...vaccinated);
};

export default getMax;
