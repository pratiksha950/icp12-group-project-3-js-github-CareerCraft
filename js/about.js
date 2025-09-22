
  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.about-section, .team-section');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  });