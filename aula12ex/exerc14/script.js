function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = 'assets/morning-500px.png'
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'assets/afternoo-500px.png'
    }
    else{
        img.src = 'assets/nigth-500px.png'
    }
}
