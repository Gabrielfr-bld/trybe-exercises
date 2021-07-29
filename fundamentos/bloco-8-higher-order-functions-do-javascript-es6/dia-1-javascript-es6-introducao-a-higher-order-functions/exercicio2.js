const valida = (num, sorte) => {
  if (num === sorte) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
}
const sorteio = (num, func) => {
  const numeroSorteado = Math.random() * 5
  const testa = func(num, numeroSorteado);
  return testa;
}

console.log(sorteio(1, valida));