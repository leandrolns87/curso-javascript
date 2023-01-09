function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) // número que a pessoa digitou
        tab.innerHTML = ''  // limpa o input depois de executado
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`  // value do option
            tab.appendChild(item)   // add um elemento filho
        }
    }
}