import split from 'graphemesplit';
import Pettern from './Pettern.js';

export const fallback = new Pettern({
    name: 'falllback',
    reg: /.*/m,
    count (q, a) {
        return {
            text: split(a).length+'',
            class: ''
        };
    }
});

export const just = new Pettern({
    name: 'just',
    reg: /([\d,]+)文?字/m,
    count (q, a) {
        const length = q.match(this.reg)[1].replace(/,/g, '');
        const count = split(a).length
        return {
            text: `${count}/${length}`,
            class: count == length ? 'notice' : 'error'
        };
    }
});

export const about = new Pettern({
    name: 'about',
    reg: /([\d,]+)字程度/m,
    count (q, a) {
        const length  = parseInt(q.match(this.reg)[1].replace(/,/g, ''));
		const range  = length * 0.2;
        const count = split(a).length;
        return {
            text:  `${length - range}<${count}<${length + range}`,
            class: (((length - range) < count) && (count < (length + range)))
			? 'notice' : 'error'
        };
    }
});

export const within = new Pettern({
    name: 'within',
    reg: /([\d,]+)字以内/,
    count (q, a) {
        const length = q.match(this.reg)[1].replace(/,/g, '');
        const count = split(a).length;
        return {
			text: `${count}/${length}`,
			class: count <= length ? 'notice' : 'error'
        };
    }
});

export const listing = new Pettern({
    name: 'listing',
    reg: /([\d,]+)つ書/m,
    count (q, a) {
        const length = q.match(this.reg)[1].replace(/,/g, '');
		const count = a.split(/[,\s\n\u3000、。]+/).filter(v => v != '').length;
		return {
            text: `${count}/${length}}`
        };
    }
});
