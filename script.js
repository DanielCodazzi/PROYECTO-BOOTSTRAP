$(document).ready(function() {

    function updateActiveIndicator() {
      $('.carousel-indicators button').removeClass('active');
      var currentIndex = $('.carousel-item.active').index();
      $('.carousel-indicators button').eq(currentIndex).addClass('active');
    }
  
    $('.carousel-indicators button').click(function() {
      var index = $(this).index();
      $('.carousel').carousel(index);
    });
  
    $('.carousel').carousel({
      interval: 4000,
      wrap: true,
      pause: false
    });
  
    $('.carousel').on('slid.bs.carousel', function () {
      updateActiveIndicator();
      $('.carousel-indicators button.active').addClass('shine');
      setTimeout(function() {
        $('.carousel-indicators button.active').removeClass('shine');
      }, 300);
    });
  
  });
  