const getVaccineLabel = countries => {
	let mostDates = [];
	let times = 0;

	//Get the country with the most numbers of dates
	countries.forEach(country => {
		if (country.data.length > mostDates.length) {
			mostDates = [...country.data];
		}
	});

	//Replace the dates for #times
	const vaccineTimes = mostDates.map(date => `# ${times++}`);

	return vaccineTimes;
};

export default getVaccineLabel;
