function carregar() {
    var msg = document.getElementById("msg")
    var msg2 = document.getElementById("msg2")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "fotomanha.png"
        document.body.style.background = "#BED984"
        msg2.innerHTML = "Bom dia!"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "fototarde.png"
        document.body.style.background = "#BF3604"
        msg2.innerHTML = "Boa tarde!"
    } else {
        //boa noite
        img.src = "fotonoite.png"
        document.body.style.background = "#010E26"
        msg2.innerHTML = "Boa noite!"
    }
}


