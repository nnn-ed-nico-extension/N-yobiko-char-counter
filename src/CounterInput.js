
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
		if(!this.el.querySelector(".char-counter")) {
			this.el.appendChild(this.createCharCounterElement());
		}
		this.answerElement.addEventListener('input', () => this.updateCounter());

		this.updateCounter ();
		this.el.querySelector(".char-counter").appendChild(this.disp);
	}

	updateCounter () {
		const length = this.getAnsLength(this.qustionText);
		this.disp.classList.remove('error', 'notice');
		console.log(length)
		if (length.type === 1) {
			this.disp.classList.add(this.answerElement.value.length <= length.num ? 'notice' : 'error');
		} else if (length.type === 2) {
			this.disp.classList.add(((this.answerElement.value.length < (length.num+5)) && (this.answerElement.value.length > (length.num-5))) ? 'notice' : 'error');
		} else if (length.type === 3) {
			this.disp.classList.add(this.answerElement.value.length == length.num ? 'notice' : 'error')
		}
		this.disp.innerText = `${this.answerElement.value.length}${length.num != void 0?"/"+length.num:""}` ;
	}

	createCharCounterElement () {
		const charCounter = document.createElement("div");
		charCounter.classList.add("char-counter");
		return charCounter;
	}

	getAnsLength (text) {
		let template = {
			num: void 0,
			type: 0
		}
		if (/(\d+)字以内/.test(text)) {
			template.num = text.match(/(\d+)字以内/m)[1];
			template.type = 1;
		} else if (/(\d+)字程度/.test(text)) {
			template.num = text.match(/(\d+)字程度/m)[1];
			template.type = 2;
		} else if (/(\d+)文字/.test(text)) {
			template.num = text.match(/(\d+)文字/m)[1];
			template.type = 3
		} else if (/(\d+)字/.test(text)) {
			template.num = text.match(/(\d+)字/m)[1];
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