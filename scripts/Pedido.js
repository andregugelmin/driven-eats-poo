export default class Pedido {
	constructor(btnPedir) {
		this.btnPedir = btnPedir;
		this.pratoSelecionado = null;
		this.bebidaSelecionada = null;
		this.sobremesaSelecionada = null;
		this.modal = document.querySelector('.overlay');
	}

	verificarPedido() {
		if (this.pratoSelecionado && this.bebidaSelecionada && this.sobremesaSelecionada) {
			this.btnPedir.classList.add('ativo');
			this.btnPedir.disabled = false;
			this.btnPedir.innerHTML = 'Fazer pedido';
		}
	}

	getPrecoTotal() {
		return this.pratoSelecionado.preco + this.bebidaSelecionada.preco + this.sobremesaSelecionada.preco;
	}

	confirmarPedido() {
		this.modal.classList.remove('escondido');

		document.querySelector('.confirmar-pedido .prato .nome').innerHTML = this.pratoSelecionado.nome;
		document.querySelector('.confirmar-pedido .prato .preco').innerHTML = this.pratoSelecionado.preco.toFixed(2);

		document.querySelector('.confirmar-pedido .bebida .nome').innerHTML = this.bebidaSelecionada.nome;
		document.querySelector('.confirmar-pedido .bebida .preco').innerHTML = this.bebidaSelecionada.preco.toFixed(2);

		document.querySelector('.confirmar-pedido .sobremesa .nome').innerHTML = this.sobremesaSelecionada.nome;
		document.querySelector('.confirmar-pedido .sobremesa .preco').innerHTML =
			this.sobremesaSelecionada.preco.toFixed(2);

		document.querySelector('.confirmar-pedido .total .preco').innerHTML = this.getPrecoTotal().toFixed(2);
	}

	cancelarPedido() {
		this.modal.classList.add('escondido');
	}

	enviarZap() {
		this.telefoneRestaurante = 553299999999;
		this.encodedText = encodeURIComponent(
			`Olá, gostaria de fazer o pedido: \n- Prato: ${this.pratoSelecionado.nome} \n- Bebida: ${
				this.bebidaSelecionada.nome
			} \n- Sobremesa: ${this.sobremesaSelecionada.nome} \nTotal: R$ ${this.getPrecoTotal().toFixed(2)}`
		);

		this.urlWhatsapp = `https://wa.me/${this.telefoneRestaurante}?text=${this.encodedText}`;
		window.open(this.urlWhatsapp);
	}
}
