import createElement from './util/createElement';
import Pettern from './Pettern';

/**
 * @prop {HTMLElement} el
 * @prop {HTMLDivElement} box
 * @prop {HTMLInputElement|HTMLTextAreaElement} input
 */
class CounterInput {

	static petterns = new Map();

	static addPettern (pettern) {
		if (!(pettern instanceof Pettern)) {
			this.addPettern(new Pettern(pettern));
			return;
		}

		this.petterns.set(pettern.name, pettern);
		return this;
	}

	/**
	 * @constructor
	 * @param {HTMLElement} el 
	 */
	constructor (el) {
		this.el      = el;
		this.display = createElement('div', 'display');
		this.input   = this.el.querySelector('.answers');
		this.box     = this.el.querySelector('.char-counter');
		this.counter = 'fallback';

		if (!this.box) {
			this.box = createElement('div', 'char-counter');
			this.el.appendChild(this.box);
		}

		const q = this.questionText;

		for (const key of CounterInput.petterns.keys()) {
			const pettern = CounterInput.petterns.get(key);
			if (pettern.reg.test(q)) {
				this.pettern = key;
				break;
			}
		}

		this.box.appendChild(this.display);
		this.input.addEventListener('input', () => this.updateDisplay());
		this.updateDisplay();
	}

	updateDisplay () {
		this.display.classList.remove('error', 'notice');

		const result = CounterInput.petterns.get(this.pettern).count(
			this.questionText,
			this.input.value
		);

		this.display.innerText = result.text;
		if (result.class) this.display.classList.add(result.class);
	}

	get questionText () {
		return this.el.querySelector('.question').innerHTML;
	}
}

export default CounterInput;
