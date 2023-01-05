function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    /* para testar 
    var hora = 22 */
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        // bom dia!
        img.src = 'foto-manhã.png'
        document.body.style.background = '#f3e8da'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#f7d81a'
    } else {
        // boa noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#7f6391'
    }
        
}
