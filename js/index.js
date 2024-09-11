

document.addEventListener('scroll', function () {
  const containers = document.querySelectorAll('.grid-item'); //careful with this selector, must be unique
  const windowHeight = window.innerHeight;

  // "what I work with" animation  
  containers.forEach(container => {
    const animatedElement = container.querySelector('.animatedElement');
    const containerPosition = container.getBoundingClientRect().top;
    const heroes = container.querySelectorAll('.hero');
    const animatedElementHeight = animatedElement.getBoundingClientRect().height;


    if (containerPosition <= (windowHeight / 2.1)) {
      animatedElement.classList.add('top-0', '-translate-y-0', 'scale-70');
      animatedElement.classList.remove('top-1/2', '-translate-y-1/2');
      animatedElement.style.marginTop = '1rem'; // Aggiungi margine superiore di 0.5rem all'elemento animato
      heroes.forEach((hero, index) => {
          setTimeout(() => {
          hero.style.marginTop = `${animatedElementHeight + 22}px`; // Aggiungi margine superiore agli hero
          hero.classList.remove('opacity-0', 'translate-y-4');
          hero.classList.add('opacity-100', 'translate-y-0');
        }, index * 65); // Ritardo crescente per ogni hero
      });
    } else {
      animatedElement.classList.remove('top-0', '-translate-y-0', 'scale-70');
      animatedElement.classList.add('top-1/2', '-translate-y-1/2');
      animatedElement.style.marginTop = '0'; // Rimuovi il margine superiore
      heroes.forEach((hero) => {
        hero.style.marginTop = '1rem'; // Rimuovi il margine superiore
        hero.classList.add('opacity-0', 'translate-y-4');
        hero.classList.remove('opacity-100', 'translate-y-0');
      });
    }
  });
});
