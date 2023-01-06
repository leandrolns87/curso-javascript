function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // pega o ano atual
    var fano = document.getElementById('txtano') // ano que vem do form
    var res = document.querySelector('div#res') //var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) { // verificar se está vazio ou maior que o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')    
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', './...imagens/criança-homem.gif')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-homem.gif')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'homem.gif')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.gif')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'criança-mulher.gif')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-mulher.gif')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher.gif')
            } else {
                // idoso
                img.setAttribute('src', 'idosa.gif')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}