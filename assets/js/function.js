function validar(){
	let name = formulario.nome;
	if (name.value == "") {
		alert("Nome nao informado");
		name.focus();
		 return false;
	}
	else if (email.value == "") {
		alert("E-mail nao informado");
		email.focus();
		 return false;
	}
	else if (mensagem.value == "") {
		alert("Mensagem nao informado");
		mensagem.focus();
		 return false;
	}
	  alert("Formulário enviado!");

}
