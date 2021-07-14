const selecionaEstados = document.querySelector('#estado');
const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

for(index in estados){
  let criaOption = document.createElement('option');
  criaOption.innerText = estados[index];
  criaOption.value = estados[index];

  selecionaEstados.appendChild(criaOption);
}

