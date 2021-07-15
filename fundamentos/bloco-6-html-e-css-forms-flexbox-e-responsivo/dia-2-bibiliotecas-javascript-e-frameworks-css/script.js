const selecionaEstados = document.querySelector('#estado');
const enviar = document.querySelector('#enviar');
const formulario = document.querySelector('#form');
const div = document.querySelector('#mostra')
const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

for(index in estados){
  let criaOption = document.createElement('option');
  criaOption.innerText = estados[index];
  criaOption.value = estados[index];

  selecionaEstados.appendChild(criaOption);
}

function validaDados (e) {
  e.preventDefault();

  //validar os dados
  let name = document.querySelector('[name=nome]');
  let email = document.querySelector('[name=email]')
  //verificar maxLength e require
  if(name.value.length > 40 || name.value.length === 0){
    alert('Nome inválido');
  } else{
    alert('Nome válido')
  }

  if(email.value.length > 50 || email.value.length === 0 || email === false){
    alert('E-mail inválido')
  } else{
    alert('E-mail válido')
  }

  

}

enviar.addEventListener('click', validaDados);

