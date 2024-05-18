function Verificar(){
    var txtnasc = document.getElementById('nasc')
    var res = document.getElementById('res')
    var masc = document.getElementById('Masc')
    var femi = document.getElementById('Femi')
    var data = new Date()
    var ano = data.getFullYear()

    if(nasc.value.lenght == 0 || nasc.value > ano){
        window.alert('Verifique o dado inserido, e tente outra vez')
    }
    else{
        var fsex = document.getElementsByName
        ('radsex')
        var genero = ''

        nasc = Number(nasc.value)

        var idade = ano-nasc

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 15){
                img.setAttribute('src', 'homem15anos.png')
            }
            else if(idade < 35){
                img.setAttribute('src', 'homem20anos.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'homem40anos.png')
            }
            else{
                img.setAttribute('src', 'homem80anos.png')                
            }

        }
        else{
            genero = 'Mulher'

            if(idade >= 0 && idade < 15){
                img.setAttribute('src', 'mulher15anos.png')
            }
            else if(idade < 35){
                img.setAttribute('src', 'mulher20anos.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'mulher40anos.png')
            }
            else{
                img.setAttribute('src', 'mulher80anos.png')            
            }
        }

        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

    

}
