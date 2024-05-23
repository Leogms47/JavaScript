function Tabuada(){
    var num = document.getElementById('txtnum')
    var seltab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um numero')
    }else{
        seltab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let n = Number(num.value)
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            seltab.appendChild(item)
        }
    }
}