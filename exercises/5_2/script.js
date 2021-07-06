let tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - Javascript DOM';
document.body.appendChild(tagH1);

let addDiv = document.createElement('div');
addDiv.className = 'main-content';
document.body.appendChild(addDiv);


let centerDiv = document.createElement('div');
centerDiv.className = 'center-content';
addDiv.appendChild(centerDiv);

let paragraph = document.createElement('p');
paragraph.innerText = 'Algum Texto!';
centerDiv.appendChild(paragraph);