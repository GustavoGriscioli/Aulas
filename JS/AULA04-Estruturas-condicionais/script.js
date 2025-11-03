/* Estruturas Condicionais */

/* 
if = se
else = senão

OPERADORES DE COMPARAÇÃO FAZ A VERIFICAÇÃO DE DUAS COISAS

- == (IGUAL A)
- === (VALOR E TIPO IGUAL A)
- =! (DIFERENTE DE)
- < (MENOR QUE)
- > (MAIOR QUE)
- <= (MENOR OU IGUAL)
- >= (MAIOR OU IGUAL)


SINTAXE DA ESTRUTURA CONDICIONAL

if (isso for == isso) {
    //se for verdadeiro faça isso
}

else{
    //se for falso faça isso
}

*/

/* let interruptor = ("Ligado");

if (interruptor == "Ligado"){
    console.log("A luz está acesa")
}
else{
    console.log("A luz está apagada")
} */


/* let joaquim = "10";
//  IGUAL IGUAL IGUAL É IGUAL A  DETALHADO (O JS VAI PROCURAR IGUALDADE NO VALOR E NO TIPO DO VALOR DEFINIDO)
if (joaquim === 10){
    console.log("O joaquim é 10")
}

else{
    console.log("O joaquim não é 10")
} */


/* let senha = "Digite sua senha:"
let senha_correta = 8922

if(senha != senha_correta){
    console.log("Senha incorreta, tente novamente")
}
else{
    console.log("Senha correta!")
} */


/* const idade_rodolfo = 18;
const maiordeidade = 18


if(idade_rodolfo >= maiordeidade){
    console.log("Pode acessar o evento!")
}
else{
    console.log("Não pode acessar o evento!")
} */

/* let adivinhe_numero = prompt("Adivinhe o numero que eu estou pensando de 0 a 10:");
const numero_certo = 3;

if(adivinhe_numero == numero_certo){
    alert("Parabens você acertou!!!!!!!")
}

else{
    alert("Você errou. Tente novamente, aperte f5!")    
} */


/* // IF e ELSE 

let pedido = prompt("Boa noite! Faça seu pedido. Escolha entre as opções: X-Bacon, X-Salada ou X-Burguer")

if(pedido == "X-Bacon"){
    alert("Boa escolha, seu pedido será preparado.")
}

else if (pedido == "X-Salada"){
    alert("Boa escolha, seu pedido será preparado.")
}

else if (pedido == "X-Burguer"){
    alert("Boa escolha, seu pedido será preparado.")
}

else{
    alert("Não temos essa opção. Digite novamente.")
} */


/* OPERADORES LÓGICOS:
- && (AND; E AQUILO)
- || (OR; OU AQUILO)
- ! (NOT; NÃO É AQUILO )
 */

let clima = prompt("O clima está ensolarado? Responda sol ou chuva?")
let dinheiro = prompt("Você tem dinheiro? Sim ou não?")

if (clima == "sol" && dinheiro === "sim"){
    alert("Você pode ir viajar amigão. Sextouu!!")
}

else{
    alert("Fica em casa amigão.")
}