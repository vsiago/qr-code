/* Captar entradas */

const form = document.querySelector('#form')

const usuarioInput = document.querySelector('#usuario')
const senhaInput = document.querySelector('#senha')
const btn = document.querySelector('#btn')
const alert = document.querySelector('#alert')




function flashMessage() {
		alert.setAttribute('class', 'flash-alert')
		alert.innerText = 'Preencha o campo Usuario'


	setTimeout(function() {
		alert.classList.remove('flash-alert')
		alert.innerText = null
	}, 2000)
}


let logarUsuario = function(usuario, senha) {
	flashMessage()

	if(!usuario) {
		alert.setAttribute('class', 'flash-alert')
		alert.innerText = 'Preencha o campo Usuario'
		console.log('Preencha o campo Usuario')
	}
	else if(!senha) {
		alert.setAttribute('class', 'flash-alert')
		alert.innerText = 'Preencha o campo Senha'
	} else {
			if(usuario === 'iago@email.com' && senha === '123') {
				alert.setAttribute('class', 'flash-sucess')
				alert.innerText = 'Usuario logado com sucesso!'
				window.location.href = 'http://127.0.0.1:5500/index.html'
			} else {
					alert.setAttribute('class', 'flash-error')
					alert.innerText = 'Usuario ou senha errado!'
		}
	}

}

// Previnir reload dor formulário
// Processar dados
btn.addEventListener('click', (e) => {
	e.preventDefault()

	logarUsuario()
})