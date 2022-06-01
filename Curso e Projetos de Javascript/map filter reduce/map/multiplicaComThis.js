const laranja = {
	preco: 2,
};

const maca = {
	preco: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.preco;
	}, laranja);
}

console.log(mapArray());