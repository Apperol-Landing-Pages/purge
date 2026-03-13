document.addEventListener("DOMContentLoaded", function () {

  let reviewsSlider;

  function initSlider() {
    if (window.innerWidth < 768) {

      if (!reviewsSlider) {
        reviewsSlider = new Swiper('.reviews-slider', {
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 24,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        });
      }

    } else {
      if (reviewsSlider) {
        reviewsSlider.destroy(true, true);
        reviewsSlider = undefined;
      }
    }
  }

  initSlider();
  window.addEventListener('resize', initSlider);

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      fetch(form.action, {
        method: "POST",
        body: new FormData(form)
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          alert("Message sent successfully!");
        }
      });
    });
  }


const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

if (menuOpen && menuClose && mobileMenu) {

  menuOpen.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('lock');
  });

  menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('lock');
  });

  const menuLinks = document.querySelectorAll('#mobileMenu a[href^="#"]');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('lock');
    });
  });

  const menuButtons = document.querySelectorAll('#mobileMenu button');

  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('lock');
    });
  });

}
});