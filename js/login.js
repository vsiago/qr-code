const usuarioInput = document.querySelector('#usuario')
const senhaInput = document.querySelector('#senha')
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

			let logar = () => window.location.href = 'http://127.0.0.1:5500/index.html';
			return logar();
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

	let userValue = usuarioInput.value;
	let passValue = senhaInput.value;

	if(!userValue) {
		flashMessage.userNull()

	} else if(!passValue) {
		flashMessage.passNull()

	} else {
			if(userValue === localStorage.getItem('usuario') && passValue === localStorage.getItem('senha')) {
				flashMessage.sucess()
			} else {
				flashMessage.error()
		}
	}

}


// Processar dados login
btnEntrar.addEventListener('click', (e) => {
	e.preventDefault()

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
		
		flashMessage.sucessRegister()		
		usuarioInput.focus();

	} else {
		flashMessage.errorRegister()
	}
}


cadastrar.addEventListener('click', (e) => {
	e.preventDefault();
	cadastrarUsuario();
})
