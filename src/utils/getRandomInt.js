const getRandomInt = (min = 0, max = 10) => {
	const minNumber = Math.ceil(min);
	const maxNumber = Math.floor(max);
	return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export default getRandomInt;