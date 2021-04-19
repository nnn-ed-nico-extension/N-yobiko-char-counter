const split = require('graphemesplit');

/**
 * @prop {HTMLLIElement} el
 * @prop {HTMLDivElement} disp
 * @prop {HTMLInputElement} answerElement
 */
class CounterInput {
	/**
	 * @param {HTMLLIElement} el 
	 */
	constructor (el) {
		this.el = el;
		this.disp = document.createElement('div');
		this.safeColor = '#00c541';
		this.errorColor = '#f55151';
		this.init();
	}

	init () {
		if(!this.el.querySelector('.char-counter')) {
			this.el.appendChild(this.createCharCounterElement());
		}
		this.answerElement.addEventListener('input', () => this.updateCounter());

		this.updateCounter ();
		this.el.querySelector('.char-counter').appendChild(this.disp);
	}

	updateCounter () {
		const max = this.getAnsLength(this.qustionText, this.answerElement.value);
		this.disp.classList.remove('error', 'notice');
		if (max.type === 1) {
			this.disp.classList.add(max.length <= max.num ? 'notice' : 'error');
		} else if (max.type === 2) {
			this.disp.classList.add(((max.length <= (max.num+10)) && (max.length >= (max.num-10))) ? 'notice' : 'error');
		} else if (max.type === 3) {
			this.disp.classList.add(max.length == max.num ? 'notice' : 'error')
		}
		this.disp.innerText = `${max.length}${max.num != void 0?'/'+max.num:''}` ;
	}

	createCharCounterElement () {
		const charCounter = document.createElement('div');
		charCounter.classList.add('char-counter');
		return charCounter;
	}

	getAnsLength (text, value) {
		let template = {
			num: void 0,
			type: 0,
			length: split(value).length
		};

		if (/(\d+)字以内/.test(text)) {
			template.num = text.match(/([\d,]+)字以内/m)[1].replace(/,/g, '');
			template.type = 1;
		} else if (/([\d,]+)字程度/.test(text)) {
			template.num = text.match(/([\d,]+)字程度/m)[1].replace(/,/g, '');
			template.type = 2;
		} else if (/([\d,]+)文字/.test(text)) {
			template.num = text.match(/([\d,]+)文字/m)[1].replace(/,/g, '');
			template.type = 3;
		} else if (/(\d+)つ書/.test(text)) {
			template.num = text.match(/([\d,]+)つ書/m)[1].replace(/,/g, '');
			template.type = 3;
			template.length = value.split(/[,\s\n\u3000、。]+/).filter(v => v != '').length;
		} else if (/([\d,]+)字/.test(text)) {
			template.num = text.match(/([\d,]+)字/m)[1].replace(/,/g, '');
			template.length = value.length;
		}
		if(template.num) template.num = Number(template.num);
		return template;
	}

	get answerElement () {
		return this.el.querySelector('.answers');
	}

	get qustionText () {
		return this.el.querySelector('.question').innerHTML;
	}
}

export default CounterInput;
