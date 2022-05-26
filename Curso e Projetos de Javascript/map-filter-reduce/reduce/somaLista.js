const lista = [45, 4, 9, 16, 25];

function soma(somatorio, numero){
    return somatorio + numero
}

console.log(lista.reduce(soma))