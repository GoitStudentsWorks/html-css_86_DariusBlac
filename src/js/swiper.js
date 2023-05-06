const swiper = new Swiper('.mySwiper', {
  slidesPreView: 1,
  spaceBetween: 10,
  loop: true,
  Keyboard: {
    enabled: true,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    clickable: true,
    renderCustom: function (swiper, current, total) {
      function numberAppend(d) {
        return d < 10 ? '0' + d.toString() : d.toString();
      }
      return (
        numberAppend(current) +
        ' <span class="swiper-pagination-line"></span> ' +
        numberAppend(total)
      );
    },
  },

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
