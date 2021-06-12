class Pettern {
    constructor ({name, reg, count, option}) {
		if (!name) throw new Error('Couter name is not defined');
		if (!reg) throw new Error('No RegExp');
		if (typeof count !== 'function') throw new Error(`count is must be function. but got '${typeof count}'`);
        this.name    = name;
        this.reg     = reg;
        this.count = count;
        this.option  = option;
    }
}

export default Pettern;
