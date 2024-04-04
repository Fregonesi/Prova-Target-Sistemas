// Exercicio 1 
INDICE = 13
SOMA = 0
K = 0

while (K < INDICE) {
    K = K + 1
    SOMA = SOMA + K
}

console.log(SOMA) // Soma = 91

// Exercicio 2
function isFibonacci(number) {
    let a = 0;
    let b = 1;
    let c;

    while (a <= number) {
        if (a === number) {
            return true; // Se o número pertencer a sequencia
        }
        c = a + b;
        a = b;
        b = c;
    }

    return false; // Se não pertencer
}

const numero = 4;
if (isFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci");
}

// Exercicio 5
function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  }
  
  let minhaString = 'Olá, mundo!';
  let stringInvertida = inverterString(minhaString);
  console.log(stringInvertida); // Saída: '!odnum ,álO'
  