let counter = document.querySelector('.par');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('.plus');
const resetBtn = document.querySelector('.reset-btn');
const btns = document.querySelectorAll('.btn');

minusBtn.disabled = true;

plusBtn.addEventListener('click', function () {
    counter.textContent = Number(counter.textContent) + 1;
});

minusBtn.addEventListener('click', function () {
    counter.textContent = Number(counter.textContent) - 1;
});

resetBtn.addEventListener('click', () => {
    counter.textContent = 0
    minusBtn.disabled = true;
});

plusBtn.addEventListener('click', function () {
    if (counter.textContent == 0) {
        minusBtn.disabled = true;
    } else {
        minusBtn.disabled = false;
    } 
});
