function flashMessage(userNull, passNull, sucess) {
	
	// Alerta caso os inputs estiverem vazios
	switch(userNull || passNull || sucess) {

		case userNull:
			alert.setAttribute('class', 'flash-alert');
			alert.innerText = 'Preencha o campo Usuario';
			console.log('Preencha o campo Usuario');
	
			setTimeout(function() {
				alert.classList.remove('flash-alert');
				alert.innerText = null;
			}, 2000);
			break;

		case passNull:
			console.log('passNull')
			alert.setAttribute('class', 'flash-alert')
			alert.innerText = 'Preencha o campo Senha'

			setTimeout(function() {
				alert.classList.remove('flash-alert')
				alert.innerText = null
			}, 2000)
			break
		
		// Alerta validar login e senha
		case sucess:
			alert.setAttribute('class', 'flash-sucess')
			alert.innerText = 'Usuario logado com sucesso!'

			setTimeout(function() {
				alert.classList.remove('flash-alert')
				alert.innerText = null
			}, 2000)

			window.location.href = 'http://127.0.0.1:5500/index.html'
			break
	}
}







if(userValue ===  && passValue === users.senha) {
