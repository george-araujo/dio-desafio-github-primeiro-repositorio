function aprova(array, media){
    let aprovados = []
    for(i = 0; i < array.length; i++){
        let {nota, nome} = array[i]
        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados
}

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'George',
		nota: 10,
		turma: '3D',
	}
];

console.log(aprova(alunos, 7))