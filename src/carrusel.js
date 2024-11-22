// Función para mover el carrusel
export function initCarousel() {
    // Datos de ejemplo: imágenes y sus textos
    const items = [
        { image: './images/Roman Holiday.jpg', title: 'Envidiosa', description: '¡Todo sobre Vicky!' },
        { image: './images/Set It Up.jpeg', title: 'Emily en París', description: 'Una historia increíble.' },
        { image: './images/The Proposal.jpg', title: 'La Emperatriz', description: 'Nuevo drama histórico.' },
        { image: './images/Pretty Woman.jpg', title: 'Receta Espacial', description: 'Diversión asegurada.' }
    ];

    // Crear elementos del carrusel
    const carousel = document.getElementById('carousel');
    const leftControl = document.getElementById('leftControl');
    const rightControl = document.getElementById('rightControl');

    // Función para crear los ítems del carrusel
    function createCarouselItems() {
        carousel.innerHTML = items.map(item => `
            <div class="item">
                <img src="${item.image}" alt="${item.title}" />
                <div class="text">
                    <div class="title">${item.title}</div>
                    <div class="description">${item.description}</div>
                </div>
            </div>
        `).join('');
    }

    // Función para mover el carrusel
    function scrollCarousel(direction) {
        const scrollAmount = 1200; // Cantidad de desplazamiento en píxeles
        if (direction === 'left') {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    // Añadir eventos a los botones de control
    leftControl.addEventListener('click', () => scrollCarousel('left'));
    rightControl.addEventListener('click', () => scrollCarousel('right'));

    // Inicializar el carrusel
    createCarouselItems();
}