let palavra = prompt("Digite a palavra a ser analizada:")

let contrario = palavra.split("").reverse().join("")

if (palavra == contrario){
    console.log("Sua palavra é um palindromo")
}else{
    console.log("Sua palavra não é um palindromo")
}