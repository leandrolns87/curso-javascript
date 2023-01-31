/*let val = [0, 9, 2, 5, 3, 6]
for (let pos = 0; pos < val.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${val[pos]}`)
}*/

// outra forma de fazer
let num = [9, 13, 15, 11, 8, 2]
num.push(10)
ordenados = num.sort(function(a, b){return a-b});
for (let posicao in ordenados) { // para cada posição em num
    //console.log(num[posicao]) 
    console.log (`A posição ${posicao} tem o valor ${ordenados[posicao]}`)
}

/* ordenando com arrow function
let i=[3, 8, -10, 23, 19, -4, -14, 27].sort((a,b)=>a-b)
console.log(i);  */