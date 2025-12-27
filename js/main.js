document.addEventListener('DOMContentLoaded', function() {
(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger-active');
    menu?.classList.toggle('menu-active');

    if (menu?.classList.contains('menu-active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger-active');
    menu.classList.remove('menu-active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger-active');
      menu.classList.remove('menu-active');
    });
  });
})();

(function(){

    const marquee = document.querySelector('.marquee');
    const items = marquee.querySelectorAll('.hero-list__item');
    const container = document.createElement('div');
    container.className = 'marquee-container';
    const set1 = document.createElement('div');
    set1.className = 'marquee-set';
    items.forEach(item => set1.appendChild(item.cloneNode(true)));
    const setsToAdd = 7;
    container.appendChild(set1);
    
    for (let i = 0; i < setsToAdd; i++) {
      const newSet = set1.cloneNode(true);
      container.appendChild(newSet);
    }
    
 
    marquee.innerHTML = '';
    marquee.appendChild(container);
    const updateSpeed = () => {
      const itemCount = items.length;
      const baseDuration = 5; 
    
      const duration = baseDuration * (itemCount / 6) * 8;
      container.style.animationDuration = `${duration}s`;
    };
    
    updateSpeed()
    window.addEventListener('resize', updateSpeed);
    container.style.animationDuration = '95s';
    if (window.innerWidth < 800) {
      container.style.animationDuration = '12s'
    }

})();

})