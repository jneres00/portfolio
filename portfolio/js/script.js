function toggleMenu() {
    const menu = document.querySelector('nav.menu');
    menu.classList.toggle('active');
}

let currentIndex = 0;
const itemsPerPage = 4;
const carousel = document.getElementById('carousel');
const totalItems = document.querySelectorAll('.carousel-item').length;
const modal = document.getElementById('zoom-modal');
const zoomImg = document.getElementById('zoom-img');
const zoomCaption = document.getElementById('zoom-caption');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function moveSlide(direction) {
    // Calcula o próximo índice baseado na direção
    currentIndex += direction * itemsPerPage;

    // Limita o índice para que ele fique dentro do intervalo de 0 a totalItems - 1
    if (currentIndex < 0) currentIndex = totalItems - itemsPerPage;
    if (currentIndex >= totalItems) currentIndex = 0;

    // Move o carrossel
    carousel.style.transform = `translateX(-${(currentIndex * 100) / totalItems}%)`;
}

function openModal(image) {
    // Exibe o modal e exibe a imagem ampliada
    zoomImg.src = image.src;
    zoomCaption.textContent = image.dataset.caption;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Evento para o botão anterior
prevButton.addEventListener('click', () => moveSlide(-1));

// Evento para o botão próximo
nextButton.addEventListener('click', () => moveSlide(1));

// Evento para fechar o modal ao clicar na área de fechamento
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
