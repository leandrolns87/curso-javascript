// buscando valores dentro do vetor
let num = [4, 1, 3, 2]
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if (pos == -1 ) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 3 está na posição ${pos}`)
}

num.indexOf(2) // se retornar -1 é pq n existe o valor no vetor

