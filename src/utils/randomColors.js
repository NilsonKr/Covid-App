const getColor = () => {
	const r = Math.floor(Math.random() * 255 + 1);
	const g = Math.floor(Math.random() * 255 + 1);
	const b = Math.floor(Math.random() * 255 + 1);

	return `rgb(${r},${g},${b},0.3)`;
};

export default getColor;
