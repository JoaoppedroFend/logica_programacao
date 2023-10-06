function mediaAluno() {

    // Lógica de programação
    // Poblema: obter 3 notas de um aluno, calcular a média
    //exibir a média e exibir a situação do aluno, aprovado ou reprovado

    console.log('Inicio do programa');

    //declaração de variaveis que não variam = cost
    //variaveis que variam = let

    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);


    //Lógica da média
    media = (nota1 + nota2 + nota3) / 3;

    console.log('A nota 1 é:' , nota1);
    console.log('A nota 2 é:' , nota2);
    console.log('A nota 3 é:' , nota3);

    console.log('A média do aluno é:' , media);

    if( media >= 7) {
        document.getElementById('resultado').innerHTML += 'Situação: APROVADO';
        
    }
    else if(media >=5 ) {
        document.getElementById('resultado').innerHTML += 'Situação: EXAME';

    
    }

    else  {
        document.getElementById('resultado').innerHTML += 'Situação: REPROVADO';
    
    }

    document.getElementById('resultado').innerHTML = 'A média do aluno é: ' + media + '<br>';

    console.log('Fim do programa')

}