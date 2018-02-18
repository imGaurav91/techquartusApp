$('.content-block').css('min-height', window.innerHeight);
$(".next").click(function() {
    alert() ;
    //$('html,body').animate({ scrollTop:$(this).closest('content-block').next().offset().top}, 'slow');
    $('html,body').animate({scrollTop:$(this).closest('.content-block').next().offset().top},'slow' );
});




$(".single-item").slick({
	dots: true ,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:true
});




			
  
