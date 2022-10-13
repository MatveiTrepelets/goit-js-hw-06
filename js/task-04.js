const valueMurkup = document.querySelector('#value');
const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const minusNumberAction = () => {
    counterValue -= 1;
    valueMurkup.textContent = counterValue;
};

const plusNumberAction = () => {
    counterValue += 1; 
    valueMurkup.textContent = counterValue;
};

minusButton.addEventListener('click',minusNumberAction);
plusButton.addEventListener('click',plusNumberAction);