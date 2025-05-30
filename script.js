window.addEventListener('load',()=>{
    alert('Bem-Video(a) ao meu portfolio de escrita cursiva!');
});

// Scroll suave nos links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Animação nas imagens da galeria
document.querySelectorAll('.grid img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

// ScrollReveal: animação de entrada
ScrollReveal().reveal('section', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: false});