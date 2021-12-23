const swiper = new Swiper('.swiper',{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 80,
    simulateTouch: false,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'fraction',
      renderFraction: function(currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '<img src="assets/images/line.svg">' +
        '<span class="' + totalClass + '"></span>'
      }
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', 
    }
})