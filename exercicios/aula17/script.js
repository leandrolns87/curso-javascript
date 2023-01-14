let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // vetor de valores

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { // se Number de n (indexOf) for diferente de -1, então foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {   // vou analisar se é um número e se não estiver em lista
        valores.push(Number(num.value))  // add um elemento no vetor
        let item = document.createElement('option') // add no select
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''  // limpar antes de finalizar
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''  // value é um atributo
    num.focus() // dá o foco do mouse
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length    // tot é o total de elementos, saber qnts elementos tem no vetor
        let maior = valores [0] // maior e menor é o 1° valor
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores) {   // analisa um por um por e ver o maior e menor
            soma += valores[pos]    // faz a soma dos valores
            if (valores[pos] > maior)  // valores na posição pos
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''  // zerar o res
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>` // += concatenado
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}