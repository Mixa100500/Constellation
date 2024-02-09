export function checkHeight() {
	return (
		window.innerHeight * 1.5 + document.documentElement.scrollTop >
		document.documentElement.offsetHeight
	)
}
