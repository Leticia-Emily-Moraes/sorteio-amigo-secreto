let listaDeAmigos = [];

function adicionarAmigo() {
	let amigo = document.querySelector("input");
	if (amigo.value == "") {
		alert("Por favor, insira um nome.");
	} else {
		listaDeAmigos.push(amigo.value);
		console.log("Amigo adicionado");
		console.log(listaDeAmigos);
		atualizarLista();
	}
	limparCampo();
}

function limparCampo() {
	let amigo = document.querySelector("input");
	amigo.value = "";
}

function atualizarLista() {
	let listaHtml = document.getElementById("listaAmigos");
	listaHtml.innerHTML = "";
	listaDeAmigos.forEach((amigo) => {
		let li = document.createElement("li");
		li.textContent = amigo;
		listaHtml.appendChild(li);
	});
}

function sortearAmigo() {
	if (listaDeAmigos.length > 0) {
		let numAmigo = Math.floor(Math.random() * listaDeAmigos.length);
		let nomeAmigo = listaDeAmigos[numAmigo];
		let resultado = document.getElementById("resultado");
		resultado.innerHTML = `O amigo sorteado foi: ${nomeAmigo}`;
		listaDeAmigos = [];
		atualizarLista();
	} else {
		alert("Por favor, insira amigos.");
	}
}
