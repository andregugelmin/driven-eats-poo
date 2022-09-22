import Bebida from './Bebida.js';
import Pedido from './Pedido.js';
import Prato from './Prato.js';
import Sobremesa from './Sobremesa.js';

const btnConfirmar = document.querySelector('.confirmar');
const btnCancelar = document.querySelector('.cancelar');
const btnPedir = document.querySelector('.fazer-pedido');

const pedido = new Pedido(btnPedir);

const prato1 = new Prato(
	'Estrombelete de Frango',
	'img/frango_yin_yang.png',
	'Um pouco de batata, um pouco de salada',
	14.9,
	pedido
);
const prato2 = new Prato('Asa de Boi', 'img/frango_yin_yang.png', 'Com molho shoyu', 14.9, pedido);
const prato3 = new Prato('Carne de Monstro', 'img/frango_yin_yang.png', 'Com batata assada e farofa', 14.9, pedido);

const pratos = [prato1, prato2, prato3];

const bebida1 = new Bebida('Coquinha gelada', 'img/coquinha_gelada.png', 'Lata 350ml', 4.9, pedido);
const bebida2 = new Bebida('Caldo de Cana', 'img/coquinha_gelada.png', 'Copo 600ml', 4.9, pedido);
const bebida3 = new Bebida('Corote Gelado', 'img/coquinha_gelada.png', 'Garrafa 400ml', 4.9, pedido);

const bebidas = [bebida1, bebida2, bebida3];

const sobremesa1 = new Sobremesa('Pudim', 'img/pudim.png', 'Gosto de doce de leite', 7.9, pedido);
const sobremesa2 = new Sobremesa('Flam', 'img/pudim.png', 'Gosto de chocolate', 7.9, pedido);
const sobremesa3 = new Sobremesa('Brigadeiro', 'img/pudim.png', '3 unidades', 7.9, pedido);

const sobremesas = [sobremesa1, sobremesa2, sobremesa3];

const pratosContainer = document.querySelector('.opcoes.prato');
pratos.forEach((prato) => pratosContainer.appendChild(prato.getView()));
const bebidasContainer = document.querySelector('.opcoes.bebida');
bebidas.forEach((bebida) => bebidasContainer.appendChild(bebida.getView()));
const sobremesasContainer = document.querySelector('.opcoes.sobremesa');
sobremesas.forEach((sobremesa) => sobremesasContainer.appendChild(sobremesa.getView()));

btnConfirmar.addEventListener('click', () => {
	pedido.enviarZap();
});

btnCancelar.addEventListener('click', () => {
	pedido.cancelarPedido();
});

btnPedir.addEventListener('click', () => {
	pedido.confirmarPedido();
});
