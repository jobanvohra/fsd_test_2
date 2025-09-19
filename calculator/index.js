const inputField1 = document.querySelector('#input-field1');
const inputField2 = document.querySelector('#input-field2');
const funcContainer = document.querySelector('.func-container');
const result = document.querySelector('#result');

const calculate = (e) => {
	if (inputField1.value && inputField2.value) {
		switch (e.target.textContent) {
			case '+':
				displayResult(
					parseInt(inputField1.value) + parseInt(inputField2.value)
				);
				break;
			case '-':
				displayResult(
					parseInt(inputField1.value) - parseInt(inputField2.value)
				);
				break;
			case 'x':
				displayResult(
					parseInt(inputField1.value) * parseInt(inputField2.value)
				);
				break;
			case '/':
				displayResult(
					parseInt(inputField1.value) / parseInt(inputField2.value)
				);
				break;
		}
	}
};

const displayResult = (res) => {
	result.innerHTML = `<div class="result-value">${res}</div>
					<div class="del">DEL</div>`;
	result.lastElementChild.addEventListener('click', () => {
		result.innerHTML = ``;
		inputField1.value = ``;
		inputField2.value = ``;
	});
};

funcContainer.addEventListener('click', (e) => {
	calculate(e);
});
