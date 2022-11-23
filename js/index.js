let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')

logado.innerHTML = userLogado.nome.charAt(0).toUpperCase() + userLogado.nome.slice(1)

if(localStorage.getItem('token') == null) {
window.location.href = 'https://vsiago-organic-space-enigma-9gxxwqqr595cpqr4-5501.preview.app.github.dev/login.html'
}

function sair() {
localStorage.removeItem('token')
localStorage.removeItem('userLogado')
window.location.href = 'https://vsiago-organic-space-enigma-9gxxwqqr595cpqr4-5501.preview.app.github.dev/login.html'
}
