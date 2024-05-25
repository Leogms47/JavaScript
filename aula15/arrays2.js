let num = [3, 4, 7, 5, 6]
num.sort()

/*for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}*/

for(let pos in num){
    console.log(num[pos])
}

let posi = num.indexOf(4)

if(posi == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 7 está na posição: ${posi} do array`)
}