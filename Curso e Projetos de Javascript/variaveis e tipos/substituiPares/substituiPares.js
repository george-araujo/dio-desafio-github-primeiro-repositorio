function substituiPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            array[i] = 0;
        }
    }
    return array
}

var lista = []
let num;

do{
    num = (prompt("Digite um número para ser adicionado a lista (Digite -1 terminar)"))
    if (num != -1){
        lista.push(num);
    }
    
}while (num != -1);

console.log(substituiPares(lista))