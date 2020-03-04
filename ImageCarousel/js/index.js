new Glide('.images', {
  type: 'carousel',
  perView: 5,
  focusAt: 'center',
  gap: 40,
  breakpoints: {
    1200: {
      perView: 3
    },
    800: {
      perView: 2
    }
  }
}).mount();
