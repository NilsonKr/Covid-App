const getVaccineData = country => {
	let data = {
		limit: 0,
		vaccines: [],
		dates: [],
	};

	for (const day in country.data) {
		data.vaccines.push(country.data[day].daily_vaccinations || 0);
		data.dates.push(country.data[day].date || '');

		if (data.limit < country.data[day].daily_vaccinations) {
			data.limit = country.data[day].daily_vaccinations;
		}
	}

	return data;
};

export default getVaccineData;
