export function scrollToLinks() {
  setTimeout(function() {
    const hashLinks = document.querySelectorAll('a[href^="#"]');

    hashLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const hash = e.target.getAttribute('href');
        const toItem = document.querySelector(hash);
        const topBarHeight = 96; // px's
        const breathingRoom = 40; // px's
        const toYPos = window.pageYOffset + toItem.getBoundingClientRect().top - topBarHeight - breathingRoom;

        window.scrollTo({
          top: `${toYPos}`,
          left: 0,
          behavior: 'smooth'
        });
      });
    });
  }, 200);
}
