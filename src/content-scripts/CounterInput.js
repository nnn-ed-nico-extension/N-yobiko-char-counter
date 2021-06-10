import createElement from './util/createElement';

/**
 * @prop {HTMLElement} el
 * @prop {HTMLDivElement} box
 * @prop {HTMLInputElement|HTMLTextAreaElement} input
 */
class CounterInput {

	static petterns = new Map();

	static addPettern (counter) {
		if (!counter.name) throw new Error('Couter name is not defined');
		if (!counter.reg) throw new Error('No RegExp');
		if (typeof counter.count !== 'function') throw new Error(`counter.count is must be function. but got '${typeof counter.count}'`);

		this.petterns.set(counter.name, counter);
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
