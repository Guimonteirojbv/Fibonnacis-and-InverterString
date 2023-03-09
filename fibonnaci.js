function fibonacci(numero) {
    let a = 0;
    let b = 1

        if (numero === 0) {
            return "O número pertence à sequência de Fibonacci.";
        } else if (numero === 1) {
            return "O número pertence à sequência de Fibonacci.";
        }


        for(let i = 2; i <= numero; i++) {
            const c = a + b
            a = b //Atribuindo o novo valor de A.
            b = c //Atribuindo o novo valor de B

            if(c === numero) {
                return "O número pertence a sequência de Fibonacci."
            }
        }

        return "O número não pertence a sequência de Fibonacci."
}

console.log(fibonacci(8)); // O número pertence à sequência de Fibonacci.
console.log(fibonacci(13)); // O número pertence à sequência de Fibonacci.
console.log(fibonacci(21)); // O número pertence à sequência de Fibonacci.
console.log(fibonacci(7)); // O número não pertence à sequência de Fibonacci.