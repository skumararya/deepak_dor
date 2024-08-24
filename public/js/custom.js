///// Footer


jQuery(document).ready(function() {


  var owl = jQuery('#footer-gov');
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1199: {
        items: 5
      }
    }
  });
  $('.prev').click(function() {
    owl.trigger('owl.prev')
  })

  $('.next').click(function() {
    owl.trigger('owl.next')
  })

})



$(function () {

    //animate on scroll
    new WOW().init();
});


$(document).ready(function() {
    var dd = $('.vticker').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 3000,
        height: '320',
        visible: 4,
        mousePause: 1,
        controls: {
            up: '.btnUp',
            down: '.btnDown',
            toggle: '.btnToggle'
        }


    }).data('easyTicker');

});
