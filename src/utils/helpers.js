
/* convert to lowercase */
export const toLowerCase = (str) => {
    return str && str.toLowerCase()
}

export const debounce = (func, wait, immediate) => {
	let timeout;
	return function() {
		let context = this, args = arguments
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args)
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}

export const prettyUrl = (str) => {
	let newStr
	if (str.includes(',')) newStr = str.replace(',', '')
	else newStr = str

    return newStr.split(' ').join('-').toLowerCase()
}