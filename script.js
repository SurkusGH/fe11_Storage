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

let isSaved = false;

document.addEventListener('DOMContentLoaded', ()=> {
    console.log(localStorage.getItem('LocalStorage'))
    const result = localStorage.getItem('LocalStorage')

    if(result){
        isSaved = true;
        console.log(`saved! value of "${result}"`)
    } else{
        console.log('not saved!')
    }
})


submit.addEventListener('click', () => {
    if(!isSaved){
    localStorage.setItem('LocalStorage', input.value)
    }
    console.log('saved!')
})

// session storage nusi'reset'ina naršyklei išjsijungus

//Confirm asignment

const reloading = true;
if(localStorage.getItem('consent') == 'accepted'){
    reloading = false
}else{
    const confirmation = confirm("Agree to terms and conditions!\nEither OK or Cancel.")
    if(confirmation){
        localStorage.setItem('consent', 'accepted')
    }
    refresh();
}
function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 1000);
}

JSON.stringify( )