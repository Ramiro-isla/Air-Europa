const swiper = new Swiper(".swiper-hero", {
    direction: "horizontal",
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: false,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });