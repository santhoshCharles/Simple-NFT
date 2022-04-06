
let timerId = null;
export const  debounceFunction = () => {
	clearTimeout(timerId)
    console.log('this', this)
	timerId = setTimeout(this, 1000)
}
