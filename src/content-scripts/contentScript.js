import CounterInput from './CounterInput';

setTimeout(() => {
	const fields = document.querySelectorAll(".section-item .exercise-item.type-descriptive");
	for (let key=0;fields.length>key;key++) {
		new CounterInput(fields[key]);
	}
}, 500);
