const valueInputNode = document.querySelector('.js-input');
const selectNode = document.querySelector('.js-select');
const outputNode = document.querySelector('.js-output');

valueInputNode.addEventListener('input', function () {
    const rub = Number(valueInputNode.value);
    const currency = selectNode.value;
    const result = convert(rub, currency)

    outputNode.innerText = result
});

selectNode.addEventListener('change', function () {
    const rub = Number(valueInputNode.value);
    const currency = selectNode.value;
    const result = convert(rub, currency)

    outputNode.innerText = result
})

