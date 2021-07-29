const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontos = (gabarito, respostas, func) => {
  let funcao = func();
  for (answer in gabarito) {
    funcao = func(gabarito, respostas);
  }
  return funcao;
}

const calcPoint = (gabarito, respostas) => {
  let soma = 0;
  for (answer in gabarito) {
    if (respostas[answer] === 'N.A') {
      soma += 0;
    } else if (gabarito[answer] !== respostas[answer]) {
      soma -= 0.5;
    } else {
      soma += 1;
    }
  }
  return soma;
}

console.log(pontos(RIGHT_ANSWERS, STUDENT_ANSWERS, calcPoint));