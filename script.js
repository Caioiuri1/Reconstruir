const slides = document.querySelectorAll('.imgs');
let current = 0;
const interval = 3000; // tempo entre trocas (3 segundos)

// mostra slide pela posição
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}


function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}


showSlide(current);
setInterval(nextSlide, interval);

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

 
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}


setInterval(createHeart, 300);

