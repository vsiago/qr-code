const labelUsuarioLogin = document.querySelector('#labelUsuarioLogin')
const inputUsuarioLogin = document.querySelector('#inputUsuarioLogin')

const labelUsuarioSenha = document.querySelector('#labelUsuarioSenha')
const inputUsuarioSenha = document.querySelector('#inputUsuarioSenha')


const btnEntrar = document.querySelector('#btn')
const alert = document.querySelector('#alert')
const btnRegister = document.querySelector('#cadastre-se')
const modalCadastro = document.querySelector('#mostrar-modal')

const btnFechar = document.querySelector('#btnFechar')

const labelNome = document.querySelector('#labelNome')
const cadastroNome = document.querySelector('#cadastroNome')
let validNome = false

const labelUsuario = document.querySelector('#labelUsuario')
const cadastroEmail = document.querySelector('#cadastroUsuario')
let validUsuario = false

const labelSenha = document.querySelector('#labelSenha')
const cadastroSenha = document.querySelector('#cadastroSenha')
let validSenha = false

const labelConfirmeSenha = document.querySelector('#labelConfirmeSenha')
const inputConfirmeSenha = document.querySelector('#inputConfirmeSenha')
let validConfirmarSenha = false


// Caso os input estiverem vazios
let flashMessage = {
	userNull: function() {
		alert.setAttribute('class', 'flash-alert');
		alert.innerText = 'Preencha o campo Usuario';

		setTimeout(function() {
			alert.classList.remove('flash-alert');
			alert.innerText = null;
		}, 2000);
	},

	passNull: function() {
		alert.setAttribute('class', 'flash-alert');
		alert.innerText = 'Preencha o campo Senha';

		setTimeout(function() {
			alert.classList.remove('flash-alert');
			alert.innerText = null;
		}, 2000);
	},

	sucess: function() {
		alert.setAttribute('class', 'flash-sucess');
		alert.innerText = 'Usuario logado com sucesso!';

		setTimeout(function() {
			alert.classList.remove('flash-sucess');
			alert.innerText = null;

			window.location.href = 'https://vsiago-organic-space-enigma-9gxxwqqr595cpqr4-5501.preview.app.github.dev';

			let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
			localStorage.setItem('token', token)
			
		}, 2000);
	},

	error: function() { 
		alert.setAttribute('class', 'flash-error');
		alert.innerText = 'Usuario ou senha errado!';

		setTimeout(function() {
			alert.classList.remove('flash-error')
			alert.innerText = null
		}, 2000)
	},

	sucessRegister: function() {
		alert.setAttribute('class', 'flash-sucess');
		alert.innerText = `Cadastrando usuário...`;

		setTimeout(function() {
			alert.classList.remove('flash-sucess');
			alert.innerText = null;
			fecharModal()

		}, 2000);
	},

	errorRegister: function() {
		alert.setAttribute('class', 'flash-error');
		alert.innerText = `Algo deu errado, reveja os campos!`;

		setTimeout(function() {
			alert.classList.remove('flash-error');
			alert.innerText = null;

		}, 2000);
	}
}


let logarUsuario = function() {
	let listaUser = []

	let userValid = {
		nome: '',
		user: '',
		senha: ''
	}

	listaUser = JSON.parse(localStorage.getItem('listaUser'))

	listaUser.forEach((item) => {
		if(inputUsuarioLogin.value == item.usuarioCad && inputUsuarioSenha.value == item.senhaCad) {

			userValid = {
				nome: item.nomeCad,
				user: item.usuarioCad,
				senha: item.senhaCad
			}
		}
	})

	if(!inputUsuarioLogin.value) {
		flashMessage.userNull()
	} else if(!inputUsuarioSenha.value) {
		flashMessage.passNull()
	} else {
		if(inputUsuarioLogin.value == userValid.user && inputUsuarioSenha.value == userValid.senha) {
			labelUsuarioLogin.setAttribute('style', 'color: green')
			inputUsuarioLogin.setAttribute('style', 'border-color: green')
			labelUsuarioSenha.setAttribute('style', 'color: green')
			inputUsuarioSenha.setAttribute('style', 'border-color: green')
			flashMessage.sucess()

			localStorage.setItem('userLogado', JSON.stringify(userValid))

		} else {
			labelUsuarioLogin.setAttribute('style', 'color: red')
			inputUsuarioLogin.setAttribute('style', 'border-color: red')
			labelUsuarioSenha.setAttribute('style', 'color: red')
			inputUsuarioSenha.setAttribute('style', 'border-color: red')
			flashMessage.error()
			inputUsuarioLogin.focus()
		}
	}
}


// Processar dados login
btnEntrar.addEventListener('click', (e) => {
	e.preventDefault()
	console.log('foi')
	logarUsuario()
})

// Botão registrar
btnRegister.addEventListener('click', (e) => {
	e.preventDefault()
	modalCadastro.classList.add('mostrar')
})


// fechar modal
let fecharModal = () => modalCadastro.classList.remove('mostrar');

btnFechar.addEventListener('click', (e) => {
	e.preventDefault()
	fecharModal()
})

// FORMULÁRIO REGISTRO -------------------------------------------------------------

cadastroNome.addEventListener('keyup', () => {
	if(cadastroNome.value.length <= 2) {
		labelNome.setAttribute('style', 'color: red');
		cadastroNome.setAttribute('style', 'border-color: red')
		labelNome.innerHTML = 'NOME <span style="letter-spacing: 0; color: red; text-transform: none;">* Digite no mínimo 3 dígitos.</span>'
		validNome = false
	} else {
		labelNome.setAttribute('style', 'color: green');
		labelNome.innerHTML = 'Nome - ok'
		cadastroNome.setAttribute('style', 'border-color: green')
		validNome = true
	}
})

cadastroEmail.addEventListener('keyup', () => {
	if(cadastroEmail.value.length <= 4) {
		labelUsuario.setAttribute('style', 'color: red');
		cadastroEmail.setAttribute('style', 'border-color: red')
		labelUsuario.innerHTML = 'USUÁRIO <span style="letter-spacing: 0; color: red; text-transform: none;">* Digite no mínimo 5 dígitos.</span>'
		validUsuario = false
		
	} else {
		labelUsuario.setAttribute('style', 'color: green');
		labelUsuario.innerHTML = 'USUÁRIO - OK'
		cadastroEmail.setAttribute('style', 'border-color: green')
		validUsuario = true
	}
})

cadastroSenha.addEventListener('keyup', () => {
	if(cadastroSenha.value.length <= 5) {
		labelSenha.setAttribute('style', 'color: red');
		cadastroSenha.setAttribute('style', 'border-color: red')
		labelSenha.innerHTML = 'SENHA <span style="letter-spacing: 0; color: red; text-transform: none;">* Digite no mínimo 6 dígitos.</span>'
		validSenha = false
	} else {
		labelSenha.setAttribute('style', 'color: green');
		labelSenha.innerHTML = 'Senha - ok'
		cadastroSenha.setAttribute('style', 'border-color: green')
		validSenha = true
	}
})

inputConfirmeSenha.addEventListener('keyup', () => {
	if(cadastroSenha.value !== inputConfirmeSenha.value) {
		labelConfirmeSenha.setAttribute('style', 'color: red');
		inputConfirmeSenha.setAttribute('style', 'border-color: red')
		labelConfirmeSenha.innerHTML = 'SENHA <span style="letter-spacing: 0; color: red; text-transform: none;">* As senhas não conferem.</span>'
		validConfirmarSenha = false
	} else {
		labelConfirmeSenha.setAttribute('style', 'color: green');
		labelConfirmeSenha.innerHTML = 'senha confirmada - ok'
		inputConfirmeSenha.setAttribute('style', 'border-color: green')
		validConfirmarSenha = true
	}
})



let cadastrarUsuario = function() {

	if(validNome && validUsuario && validSenha && validConfirmarSenha) {

		let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

		listaUser.push(
			{
				nomeCad: 		cadastroNome.value,
				usuarioCad: 	cadastroEmail.value,
				senhaCad:		cadastroSenha.value
			}
		)

		localStorage.setItem('listaUser', JSON.stringify(listaUser))
		
		//localStorage.setItem('nome', nome)
		//localStorage.setItem('usuario', usuario)
		//localStorage.setItem('senha', senha)
		
		cadastroNome.value = ''
		cadastroEmail.value = ''
		cadastroSenha.value = ''
		inputConfirmeSenha.value = ''
		
		flashMessage.sucessRegister()		
		inputUsuarioLogin.focus();

	} else {
		flashMessage.errorRegister()
	}
}


cadastrar.addEventListener('click', (e) => {
	e.preventDefault();
	cadastrarUsuario();
})

