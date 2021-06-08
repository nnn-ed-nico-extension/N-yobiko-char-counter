const split = require('graphemesplit');

/**
 * @prop {HTMLElement} el
 * @prop {HTMLDivElement} box
 * @prop {HTMLInputElement|HTMLTextAreaElement} input
 */
class CounterInput {

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

	/**
	 * @constructor
	 * @param {HTMLElement} el 
	 */
	constructor (el) {
		this.el      = el;
		this.display = CounterInput.createElement('div', 'display');
		this.input   = this.el.querySelector('.answers');
		this.box     = this.el.querySelector('.char-counter');

		if (!this.box) {
			this.box = CounterInput.createElement('div', 'char-counter')
			this.el.appendChild(this.box);
		}

		this.box.appendChild(this.display);
		this.input.addEventListener('input', () => this.updateDisplay());
		this.updateDisplay();
	}

	updateDisplay () {
		this.display.classList.remove('error', 'notice');

		const result = this.getResult(
			this.questionText,
			this.input.value
		);

		this.display.innerText = result.text;
		if (result.class) this.display.classList.add(result.class);
	}

	getResult (question, answer) {
		const ansLength = split(answer).length;
		const result = {
			text: ansLength,
			class: ''
		};

		if (/(\d+)字以内/.test(question)) {
			const count  = question.match(/([\d,]+)字以内/m)[1].replace(/,/g, '');
			result.text  = `${ansLength}/${count}`;
			result.class = ansLength <= count ? 'notice' : 'error';
		} else if (/([\d,]+)字程度/.test(question)) {
			const count  = parseInt(question.match(/([\d,]+)字程度/m)[1].replace(/,/g, ''));
			const range  = count * 0.2;
			result.text  = `${count - range}<${ansLength}<${count + range}`;
			result.class = (((count - range) < ansLength) && (ansLength < (count + range)))
				? 'notice' : 'error'
		} else if (/([\d,]+)文字/.test(question)) {
			const count = question.match(/([\d,]+)文字/m)[1].replace(/,/g, '');
			result.text = `${ansLength}/${count}`;
			result.class = ansLength == count ? 'notice' : 'error';
		} else if (/([\d,]+)字/.test(question)) {
			const count = question.match(/([\d,]+)字/m)[1].replace(/,/g, '');
			result.text = `${ansLength}/${count}`;
			result.class = ansLength == count ? 'notice' : 'error';
		} else if (/(\d+)つ書/.test(question)) {
			const count = question.match(/([\d,]+)つ書/m)[1].replace(/,/g, '');
			const length = answer.split(/[,\s\n\u3000、。]+/).filter(v => v != '').length;
			result.text = `${length}/${count}`;
		}

		return result;
	}
	
	get questionText () {
		return this.el.querySelector('.question').innerHTML;
	}
}

export default CounterInput;