function comparaNumeros(num1, num2) {
    if(!num1 || !num2) return "Defina dois números!"
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){
    let msg = '';
    
    if(num1 !== num2) {
      msg =  'não'
    }
    return `Os números ${num1} e ${num2} ${msg} são iguais.`;

}
function criarSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        restultado10 = 'maior'

    }
    if(compara20){
        resultado20 = 'maior'
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20}que é 20`;
}

