export default class Sobremesa {
	constructor(nome, imagem, descricao, preco, pedido) {
		this.nome = nome;
		this.imagem = imagem;
		this.descricao = descricao;
		this.preco = preco;
		this.view = null;
		this.pedido = pedido;
	}

	getView() {
		this.view = document.createElement('div');
		this.view.classList.add('opcao');
		this.view.addEventListener('click', () => {
			this.selecionar(this.nome, this.preco);
		});
		this.view.innerHTML = `
            <img src="${this.imagem}" />
            <div class="titulo">${this.nome}</div>
            <div class="descricao">${this.descricao}</div>
            <div class="fundo">
                <div class="preco">R$ ${this.preco.toFixed(2)}</div>
                <div class="check">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
        `;

		return this.view;
	}

	selecionar(nome, preco) {
		this.selecionado = document.querySelector('.sobremesa .selecionado');
		if (this.selecionado !== null) {
			this.selecionado.classList.remove('selecionado');
		}
		this.view.classList.add('selecionado');

		this.pedido.sobremesaSelecionada = {
			nome,
			preco,
		};
		this.pedido.verificarPedido();
	}
}
