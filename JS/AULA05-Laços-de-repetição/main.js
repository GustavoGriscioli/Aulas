/* Vai dar tudo certo! 🖤🤍 */

//Laços De Repetição 


console.log("Gustavo")
console.log("Gustavo")
console.log("Gustavo")
console.log("Gustavo")
console.log("Gustavo")
console.clear();

/* 
For (Para) = Conte dessa quantidade até essa quantidade; Usado quando sabemos nosso limite.

While (Enquanto) = Usado quando não sabemos exatamente quantas vezes queremos repetir algo, mas sabemos a condição.




//SINTAXE DO FOR

for(inicio; comparação; incremento){
    //Oque fazer caso isso seja verdade
}

Operadores de comparação
<
>
<=
>=
!=
==

Operadores lógicos

&& and
|| or
! not

*/


for(let i = 1; i <= 5; i++ ){
    console.log(i)
}


// PIZZARIA DO RAPHA
//#VOLTARAPHA

for(let fatia = 1; fatia <= 5; fatia++){
    console.log(`Comendo a ${fatia}ª fatia de pizza!`)
}

console.clear();



/* 
//SINTAXE DO WHILE 

ENQUANTO ISSO FOR VERDADE, FAÇA


While(condição){
    //se a condição for verdadeira faça isso
}

*/


let contador = 1;
while(contador <= 300){
    console.log(contador)
    contador++;
}

console.clear();

let numeroSecreto = 22;
let tentativas = 3;
let numeroDigitado;

while(numeroSecreto != numeroDigitado && tentativas > 0){
    let numeroDigitado = Number(prompt("Digite um número de 1 a 50."))
    
    if(numeroDigitado == numeroSecreto){
        alert("Parabens você acertou! 🎈🥳✨🎉 ")
    }
    else{
        tentativas = tentativas - 1
        alert(`Você errou! Você tem mais ${tentativas} tentativas:`)
    }
}

if(tentativa == 0){
    alert("Acabaram suas tentativas!")
}

