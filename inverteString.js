let string = "exemplo";
let stringInvertida = "";


//Este código utiliza um loop que começa na ultima posição da string string.length - 1 e a cada
//iteração do loop o caracter é adicionado a variável stringInvertida
for(let i = string.length - 1; i >= 0; i--){
    stringInvertida += string[i];
}

console.log(stringInvertida); 

