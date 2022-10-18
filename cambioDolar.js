//node cambioDolar.js --cantidad=1000 --tasa=24.78 --tipo=false
//false -> de lps a dolares
//true-> de dolares a lps
//console.log(valorResultante)
//console.log(process.argv)
let [,,p1,p2,p3]=process.argv
//console.log(p1,p2,p3)
const [,cantidad]=p1.split('=')
const [,tasa]=p2.split('=')
let [,tipo]=p3.split('=')
tipo= (tipo==="true")

//if(tipo===true){
//IF TERNARIO

let valorResultante= tipo ? cantidad*tasa : cantidad/tasa

console.log(`El cambio es: ${valorResultante} ${tipo?'lps':'$'}`)