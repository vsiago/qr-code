body.addEventListener('load', () => {
	if(localStorage.getItem('token' == false)) {
	window.location.href = 'https://vsiago.github.io/qr-code/login.html'
} else {
	function sair() {
	localStorage.removeItem('token')
	window.location.href = 'https://vsiago.github.io/qr-code/login.html'
	}
}
