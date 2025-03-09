const cardContainer = document.getElementById('card-container');
const changeCardBtn = document.getElementById('change-card-btn');
const imageElement = document.getElementById('image');

// Cards alternativos
const cards = [
    './src/assets/coffee.velvet.jpeg',
    './src/assets/delicia.caramelo.jpeg',
    './src/assets/classic.coffee'
];

let currentCardIndex = 0;

// Função para inicializar o primeiro card
function initializeFirstCard() {
    imageElement.src = cards[currentCardIndex];
}

// Alternar card ao clicar no botão
changeCardBtn.addEventListener('click', () => {
    // Adiciona a classe de animação
    imageElement.classList.add('move-left');

    // Troca a imagem após a animação
    setTimeout(() => {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        imageElement.src = cards[currentCardIndex];

        // Remove a classe de animação para reiniciar
        imageElement.classList.remove('move-left');
    }, 500); // Tempo deve ser igual ao da transição CSS
});

// Inicializar o primeiro card quando a página carregar
window.onload = initializeFirstCard;
