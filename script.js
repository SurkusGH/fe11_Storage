// const firstName = 'Gytis';
// const button = document.querySelector('#button');
// button.addEventListener('click', () => {
//   sessionStorage.setItem('name', firstName);
//   localStorage.setItem('lastname', firstName);
// })
// function getName() {
//   const getName = sessionStorage.getItem('name');
//   console.log(getName);
// }
// getName();


let h2 = document.querySelector("#h2");
let submit = document.querySelector("#submit");
let input = document.querySelector('#texty')

document.addEventListener('keyup', funcValue)

function funcValue(){
    h2.innerHTML = input.value;
}

submit.addEventListener('click', () => {
    sessionStorage.setItem('LocalStorage', input.value)
})
