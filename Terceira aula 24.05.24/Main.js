/*
Eu começo o meu código dando valor a duas variaveis diferentes, que são o X e o F, com cada valor diferente deles.
depois eu começo como console.log, e abro parenteses para iniciar o codigo, e começo colocando a letra da primeira variavel.
e sempre colocando a virgula depois, ai eu abro uma string depois dessa virgula, e coloco o sinal da conta que vai aparecer na tela da pessoa
e eu fecho novamente com virgula, e coloco depois da virgula segunda variavel, para que ele entenda que eu quero o valor da variavel, não uma string.
e eu coloco novamente a virgula, e abro outra string, somente com o sinal de igual, para aparecer na tela da pessoa como forma de conta
e fecho novamente colocando mais uma virgula, e depois dessa ultima virgula DESTE codigo, eu coloco a primeira variavel
e depois coloco o simbolo da operação da minha escolha, e logo após coloco a segunda variavel, e fecho os parenteses, e depois inicia.
*/

//Escreva um programa que receba duas variáveis de números inteiros e realize as quatro operações básicas (adição, subtração, multiplicação e divisão). Mostre os resultados

var X = 8
var F = 2 

console.log (X,"X",F, "=", X*F)

console.log ("")

console.log (X,"-",F, "=", X-F)

console.log ("")

console.log (X,"/",F, "=", X/F)

console.log ("")

console.log (X,"+",F, "=", X+F) 



/*
para começar eu coloco o var, e coloco o valor da variavel, a minha variavel é o "Celsius", e depois disso, eu abro parenteses duas vezes 
o primiro pareenteses, vai ser o que vai possuir o codigo inteiro entro dele, agora o segundo parenteses, vai ser para colocar o valor do celsius
que nesse caso o valor é 68, e depois disso é sócolocar o valor do Fahrenheit, que é estes numeros depois do 68, ai depois de ter fechado este comando
é só abrir o console.log, abrir parenteses e aspas, e escrever a string que vai aparcer para a pessoa na tela 
e depois é só fechar as aspas, colocar a virgula, e colocar novamente a variavel, que é o Celsius, e depois colocar novamente a virgula
e abrir mais uma aspas, para criar mais uma string no final do codigo, que vai ser a continuação do primeiro txto da string.
*/

// Crie um programa que converta uma temperatura de Fahrenheit  para Celsius. A fórmula de conversão é: C = (F - 32 ) / 1,8

console.log ("")

var Celsius = ((68 - 32) / 1.8)

console.log ("A temperatura de Fahrenheit para celsius é:", Celsius,"C°")

console.log ("")



/*
eu começo com o var e coloco as minhas variaveis abaixo, que sao "celsius" e o "Fahrenheit", no valor do Fahrenheit eu abro parenteses
e coloco a variavel dentro do valor dele, a variavel que eu coloquei dentro foi o Celsius,, e depois eu coloquei o sinal da operação que ele tem que fazer
que é multiplicação nesse caso, e depois é só colocar o valor do proprio Fahrenheit que é esses numeros depois do sinal de operação "*" e é so fehcar os parenteses depois
e depois é só abrir o console.log, e criar uma string, colocando a escrita para a pessoa ver, colocar a virgula depois, e colocar na frente a variavel da conta
que vai ser a variavel Fahrenheit, e depois dar a virgula, e criar mais uma string para colocar o simbolo do Far=hrenheit, que é o F.
*/

//Crie um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é: F = C x (9/5) + 32

var 
Celsius = 23 
Fahrenheit = ( Celsius * (9/5) + 32)

console.log ("A temperatura de Celsius para Fahrnheit é:", Fahrenheit, "F")

console.log("")



/*Aqui eu tinha que fazer 7 metros se transformar em centimetros, entao eu coloquei o var, com o valor da minha variavel abaixo
que é o "metros", o 7 que está ali, seria 7 metros, e a * é o sinal de vezes, e depois veio o numero 100, que é o valor de 1 metro transformado em centimetros
ai eu abri o console.log, abri parenteses e aspas e fiz uma string, com a escrita da resposta, e depois coloquei virgula e depois novamente a vaiavel "metros"
e coloquei novamente a virgula e mais uma string para ser a continuação da minha escrita da resposta
*/

//Faça um programa que converta metros para centímetros. A variavel deve receber o valor em metros

var
Metros = (7 * 100)

console.log ("O valor de 7 metros em centimetros é:", Metros, "Centimetros")

console.log ("")



/*eu coloco o var, e coloco os nomes das minhas variaveis, sem pular espaço entre os nomes, eu crio uma variavel com o total do valor da venda
crio outro com a variavel do desconto, e na continuação dessa variael eu coloco tambem o valor total da venda, e mais o simbolo de multiplicação, que é o "*"
com o desconto de 0.10%, e coloco mais uma variavel com o preço final, e na frente a variavel do valor total menos (-) o desconto que é o 0.10 que nao precisa escrever novamente.
*/

//Crie um programa que calcule o preço final de um produto após um desconto de 10%, a variável deve receber o valor total da venda

var valor_total_venda = 100 desconto = valor_total_venda * 0.10preco_final = valor_total_venda - desconto

console.log ("O valor total da compra com desconto é:", preco_final)
