if(localStorage.getItem('token' == null)) {
	window.location.href = 'http://127.0.0.1:5500/login.html'
}

function sair() {
    localStorage.removeItem('token')
	window.location.href = 'http://127.0.0.1:5500/login.html'
}