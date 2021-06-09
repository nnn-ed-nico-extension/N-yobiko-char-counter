import CounterInput from './CounterInput';
import * as petterns from './petterns';

CounterInput.addPettern(petterns.within);
CounterInput.addPettern(petterns.about);
CounterInput.addPettern(petterns.just);
CounterInput.addPettern(petterns.listing);
CounterInput.addPettern(petterns.fallback);

setTimeout(() => {
	const fields = document.querySelectorAll(".section-item .exercise-item.type-descriptive");
	for (let key=0;fields.length>key;key++) {
		new CounterInput(fields[key]);
	}
}, 500);
