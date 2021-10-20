var notas = document.getElementById('notas');


var estoyaprobado = (nota) => {
    
if(nota > 0 && nota <= 5){
    return 'insuficiente';
    
} else if(nota > 5 && nota <=6){
    return 'Suficiente'
}else if(nota >= 7){
    return 'notable'
}else
 return 'Sobresaliente'
}