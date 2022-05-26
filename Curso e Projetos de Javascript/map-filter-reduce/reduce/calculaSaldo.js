function calculaSaldo(saldo, custo){
    return saldo - custo.preco
}


lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(lista.reduce(calculaSaldo, saldo))