if(localStorage.getItem('token' == null)) {
	window.location.href = 'https://vsiago.github.io/qr-code/login.html'
}

function sair() {
    localStorage.removeItem('token')
	window.location.href = 'https://vsiago.github.io/qr-code/login.html'
}
