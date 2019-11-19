$(document).ready(function() {
  $(".slide-one").owlCarousel({
    items: 3,
    margin: 20,
    responsive: {
      950: {
        items: 2
      },
      600: {
        items: 1
      },
      0: {
        items: 1
      }
    }
  });
});

$(".slide-two").owlCarousel({
  items: 1,
  margin: 10,
  autoHeight: true
});
