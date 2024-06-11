// console.log('Olá, JavaScript!')

// var userName = 'Márcio?'

// document.getElementById('user-name').innerHTML = userName

//###############################################################################

// Variáveis ⇩
// var nome = 'Mestre Yoda';
// var idade = 100;
// var jedi = true;

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi) 

//###############################################################################

// Operadores matemáticos ⇩
// + para somar 
// - para subtrair
// * para multiplicar
// / para dividir 

// var n1 = 7
// var n2 = 2

// onsole.log(typeof n1)
// console.log(typeof n2)

// var total = n1 / n2;
// console.log(total)

//###############################################################################

// Operadores de comparação ⇩
// var v1 = 5
// var v2 = '5'

// var resultado = v1 !== v2
// console.log(resultado)

// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
// 1==1 ou 2=='2' //true

// Não igual ou diferente (!=)
// Retorna verdadeiro se os valores comparados não forem iguais
// 4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
// 3==='3' //false
// 3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true

//###############################################################################

// Funções ⇩
// function soma (n1,n2) {
//     console.log(n1 + n2)
// }

// soma(5,100)

// function boasVindas(nome) {
//     alert('Bem-vindo(a), ' + nome + '!')
// }

// boasVindas('Diego')

// function sum(num1, num2) {
//     return num1 + num2
// }

// var result = sum(5,9)
// console.log(result)

// Controle de fluxos ⇩
// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixa eletrônicos
// Para poder comprar em lugares que não aceitam cartão de débito e crédito

//Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

//Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta infomando que o valor é superior ao saldo

//Cenário 3: Saque com valor máximo
// Dado que o meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando tento realizar um saque no valor acima de 700 reais 
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// var saldo = 1000
// var saque = prompt('Digite o valor do saque: ');

// function operacao (valor) {
//     if (valor > 1000) {
//         console.log('Saldo insuficiente para saque!')
//     } else if(valor > 700) {
//         console.log('Valor do saque superior ao permitido por operação!')
//     } else {
//         saldo -= valor
//         console.log('Valor do saque: R$' + valor)
//         console.log('Saldo atual: R$' + saldo)
//     }
// }

// operacao(saque)

//#############################################################################

// // Arrays ⇩
// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Darth Vader', 'Chewbacca']
// personagens.push('R2d2')
// personagens.push('Princesa Leia') // adiciona um personagem no final da lista
// personagens.pop() // Remove o último personagem da lista

// personagens = personagens.filter(function(p) { // p é a unidade de um personagem
//     return p !== 'Darth Vader'
// }) // código para remover um personagem específico da lista

// personagens = personagens.filter(function(p) { // p é a unidade de um personagem
//     return p === 'Luke Skywalker'
// }) // código para trazer um personagem específico da lista

// console.log(personagens)

//###############################################################################

// Controles de repetição (Loops)
// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Darth Vader', 'Chewbacca', 'R2D2']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for(var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i < personagens.length; i++) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
// }

//###############################################################################

// Objetos

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos`)
//     }

// }


// console.log(yoda)
// yoda.mostraIdade()

//###############################################################################

// Constantes
// const nome = 'Darth Vader'
// nome = 'Anakin'
// por conta de nome ser uma constante o valor dela não será alterado para Anakin
