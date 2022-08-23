// Manipulando Conteúdo
// textContext

const firstElement = document.querySelector("h1");
firstElement.textContent = " Olá Devs!";
console.log(firstElement.textContent);

//innerText

const secondElement = document.querySelector("h1");
secondElement.innerText = " Olá Devs";
console.log(secondElement.innerText);

//innerHTML

const thirdElement = document.querySelector("h1");
thirdElement.innerHTML = "Olá Dev! <small>!!!</small>";
console.log(thirdElement.innerHTML);
