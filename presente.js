const heartsContainer = document.getElementById('falling-hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    // Posição aleatória horizontal
    heart.style.left = Math.random() * window.innerWidth + 'px';

    // Tamanho aleatório
    const size = 10 + Math.random() * 30;
    heart.style.fontSize = size + 'px';

    // Duração da queda aleatória (4 a 10 segundos)
    const duration = 4 + Math.random() * 6;
    heart.style.animationDuration = duration + 's';

    heartsContainer.appendChild(heart);

    // Remove o coração depois da animação
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Cria corações periodicamente
setInterval(createHeart, 300); // a cada 0.3s