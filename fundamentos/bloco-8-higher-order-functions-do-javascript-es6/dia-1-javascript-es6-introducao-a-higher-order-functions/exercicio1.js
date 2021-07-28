const pessoaContratada = (nome) => {
    const obj = {
        nomeCompleto: nome,
        email: `${nome}@betrybe.com`,
    }
    return obj;
}

const newEmployees = () => {
    const employees = {
      id1: pessoaContratada('PedroGuerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: pessoaContratada('LuizaDrumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: pessoaContratada('CarlaPaiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.table(newEmployees());  