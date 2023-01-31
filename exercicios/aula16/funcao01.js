function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(11)    // chamada da função
console.log(res)

console.log(parimp(200))