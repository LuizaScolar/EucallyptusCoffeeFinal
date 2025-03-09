let currentIndex = 0; // Índice atual do carrossel

function moveCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.item');
    const totalItems = items.length;

    // Atualiza o índice atual
    currentIndex += direction;

    // Verifica os limites do carrossel
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Volta para o último item
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Volta para o primeiro item
    }

    // Calcula a nova posição do carrossel
    const newTransformValue = -currentIndex * (100 / totalItems);
    carousel.style.transform = `translateX(${newTransformValue}%)`;

    // Adiciona a classe de animação
    carousel.classList.add('animate');

    // Remove a classe de animação após a transição
    setTimeout(() => {
        carousel.classList.remove('animate');
    }, 500); // Tempo deve ser igual ao tempo de transição no CSS
}