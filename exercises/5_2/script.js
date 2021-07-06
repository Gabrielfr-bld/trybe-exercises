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

let leftDiv = document.createElement('div');
leftDiv.className = 'left-content';
addDiv.appendChild(leftDiv);

let rightDiv = document.createElement('div');
rightDiv.className = 'right-content';
addDiv.appendChild(rightDiv);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftDiv.appendChild(image);

let list = document.createElement('ul');
let numList = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];
for(let index in numList){
    let num = numList[index];

    let li = document.createElement('li');
    li.innerHTML = num;
    
    list.appendChild(li);
};
rightDiv.appendChild(list);




