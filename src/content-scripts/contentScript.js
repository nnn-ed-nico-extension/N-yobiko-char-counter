import CounterInput from './CounterInput';
import * as petterns from './petterns';

CounterInput
	.addPettern(petterns.within)
	.addPettern(petterns.about)
	.addPettern(petterns.just)
	.addPettern(petterns.listing)
	.addPettern(petterns.fallback);

setTimeout(() => {
	const fields = document.querySelectorAll(".section-item .exercise-item.type-descriptive");
	for (let key=0;fields.length>key;key++) {
		new CounterInput(fields[key]);
	}
}, 500);
