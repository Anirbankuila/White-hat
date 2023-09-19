jQuery(function($){

$(window).load(function(){
  $('#prelodaer').fadeOut(300);
});

$(window).on('load',function(){
  $('body').addClass('animation-wrap');
  setTimeout(function(){
    $('.banner-para-n-cta').addClass('active');
  }, 2000);

  var eachBlockWidth = $('.banner-blocks').find('.each-block').innerWidth();
  var eachBlockHeight = $('.banner-blocks').find('.each-block').innerHeight();
  $('.moveable_item').height(eachBlockHeight);
  $('.moveable_item').width(eachBlockWidth);

  $('.banner-blocks .each-block').mouseover(function(e){
      var mainDivOffset = $('.banner-blocks').offset().left;
      var offset = $(this).offset(); 
      $('body').find('.moveable_item').css('left', offset.left - mainDivOffset);

      console.log(offset.top+'  '+offset.left); //offset of 'realtiveDiv'
      //console.log(e.pageX +'  '+e.pageY); // mouse position absolute
  });
});


//======================= For AOS Animation
AOS.init({
  offset: 200,
  delay: 100,
  duration: 800,
  disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});
$(document).ready(function () {
  $('.title').attr({
     "data-aos": "zoom-in",
     "data-aos-duration": "2000"
  });
});

//refresh animations
$(window).on('load', function() {
  AOS.refresh();
});
// ======================================For Sticky Header
$(window).scroll(function(){
  $('.main-header').toggleClass('sticky', $(this).scrollTop() > 50);
  });
// ======================================For Hamburger
$('.hamburger').click(function(){
  $(this).toggleClass('open');
  $('.navigation').toggleClass('open-nav')
});


function subMenu() {
  $('.navigation ul > li > ul').parent().append('<i class="fa-solid fa-angle-down arw-nav"></i>');
  $('.navigation ul > li > .arw-nav').on('click', function () {
    $(this).parent('li').find('> ul').stop(true, true).slideToggle();
    $(this).parents('li').siblings().find('ul').stop(true, true).slideUp();
    $(this).toggleClass('actv');
    $(this).parent().siblings().find('.arw-nav').removeClass('actv');
  });
} subMenu();


// For Feedback Slider
$('.feedback-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '400px'
});



$(window).on('scroll', function () {
  if ($(this).scrollTop() > 0) {
    $('.scroll-to-target').addClass('open');
  } else {
    $('.scroll-to-target').removeClass('open');
  }
  if ($(this).scrollTop() > 500) {
    $('.scroll-to-target').addClass('open');
  } else {
    $('.scroll-to-target').removeClass('open');
  }
});
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target'); // animate

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });
}


});



	
	
	
	
	
	
	
	