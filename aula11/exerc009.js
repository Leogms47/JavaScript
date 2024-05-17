
function calcular(){
    var txtvel = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtvel.value)

    if(vel > 60){
        res.innerHTML = `<p>Sua velocidade é de: <strong>${vel} km/h</strong>, você ultrapassou o limite de velocidade.</p>`
        res.innerHTML += '<p><strong>Você recebera uma multa por excesso de velocidade</strong></p>'
    }
    else{
        res.innerHTML = `<p>Sua velocidade atual é de: <strong>${vel} Km/h.</strong></p>`

        res.innerHTML += `<p><strong>Dirija com cuidado e use sinto de segurança.</strong></p>`
    }

    
}