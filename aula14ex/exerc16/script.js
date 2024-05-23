function Contar(){
    var inic = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inic.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = '[ERRO] Faltando dados'
    }
    else{
        res.innerHTML = 'Contando: '
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <=0){
            window.alert('[ERRO] Passo Inválido! Considerando Passo 1')
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F603}`
            }
        }
        else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F603}`
            }            
        }
    }    
}