// $(document).ready(function() {
//   $(".menu-icon").on("click", function() {
//         $("nav ul").toggleClass("showing");
//   });
// });

// // Scrolling Effect

// $(window).on("scroll", function() {
//   if($(window).scrollTop()) {
//         $('nav').addClass('black');
//   }

//   else {
//         $('nav').removeClass('black');
//   }
// })

$(function () {
      $(window).on('scroll', function () {
          if ( $(window).scrollTop() > 5 ) {
              $('.navbar').addClass('active');
          } else {
              $('.navbar').removeClass('active');
          }
      });
  });

