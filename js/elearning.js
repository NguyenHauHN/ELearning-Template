$(document).on('ready', function() {
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000
    });
  });
