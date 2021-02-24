const counter = $('.par');
const minusBtn = $('#minus');
const plusBtn = $('.plus');
const resetBtn = $('.reset-btn');
const btns = $('.btn');

minusBtn.prop('disabled', true);

plusBtn.on('click', function () {
    counter.text(Number(counter.text()) + 1);
    if (counter.text() == 0) {
        minusBtn.prop('disabled', true);
    } else {
        minusBtn.prop('disabled', false);
    }
});

minusBtn.on('click', function () {
    counter.text(Number(counter.text()) - 1);
    if (counter.text() == 0) {
        minusBtn.prop('disabled', true);
    } else {
        minusBtn.prop('disabled', false);
    }
});

resetBtn.on('click', () => {
    counter.text() = 0
    minusBtn.disabled = true;
});

