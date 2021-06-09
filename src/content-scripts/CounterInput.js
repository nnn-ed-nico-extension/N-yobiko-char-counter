/**
 * @prop {HTMLElement} el
 * @prop {HTMLDivElement} box
 * @prop {HTMLInputElement|HTMLTextAreaElement} input
 */
class CounterInput {

	static petterns = new Map();

	/**
	 * 
	 * @param {String} tag Element tag
	 * @param {String[] || String} classes Classes of element
	 * @param {Array[]} attrs Attrs of element
	 * @param {ElementCreationOptions} [option] 
	 * @returns {HTMLElement}
	 */
	static createElement (tag, classes=[], attrs=[], option) {
		const el = document.createElement(tag, option);

		if (typeof classes === 'string')
			el.classList.add(classes);
		else
			el.classList.add(...classes);

		for (const attr of attrs) el.setAttribute(attr[0], attr[1]);
		return el;
	}

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
		this.display = CounterInput.createElement('div', 'display');
		this.input   = this.el.querySelector('.answers');
		this.box     = this.el.querySelector('.char-counter');
		this.counter = 'fallback';

		if (!this.box) {
			this.box = CounterInput.createElement('div', 'char-counter')
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