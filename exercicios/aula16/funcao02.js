function soma (n1, n2) {
    return n1 + n2
}

console.log(soma(3, 5)) 

function soma2 (n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma2(3)) // se passar somente um parâmetro, dá o erro NaN not a number
// para solucionar passa o valor nos parâmetros já definidos - function multiplicao (n1 = 0, n2 = 0) {