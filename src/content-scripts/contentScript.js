import CounterInput from './CounterInput';
import * as petterns from './petterns';

CounterInput
	.pettern(petterns.within)
	.pettern(petterns.about)
	.pettern(petterns.just)
	.pettern(petterns.listing)
	.pettern(petterns.fallback);

setTimeout(() => {
	const fields = document.querySelectorAll(".section-item .exercise-item.type-descriptive");
	for (let key=0;fields.length>key;key++) {
		new CounterInput(fields[key]);
	}
}, 500);
