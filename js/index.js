let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')

logado.innerHTML = userLogado.nome.charAt(0).toUpperCase() + userLogado.nome.slice(1)

if(localStorage.getItem('token') == null) {
window.location.href = 'http://127.0.0.1:5501/login.html'
}

function sair() {
localStorage.removeItem('token')
localStorage.removeItem('userLogado')
window.location.href = 'http://127.0.0.1:5501/login.html'
}
