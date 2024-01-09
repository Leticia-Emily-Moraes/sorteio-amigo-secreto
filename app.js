let listaDeAmigos = [];

function adicionarAmigo() {
	let amigo = document.querySelector("input");
	if (amigo.value == "") {
		alert("Por favor, insira um nome.");
	} else {
		listaDeAmigos.push(amigo.value);
		console.log("Amigo adicionado");
		console.log(listaDeAmigos);
	}
	limparCampo();
}

function limparCampo() {
	let amigo = document.querySelector("input");
	amigo.value = "";
}
