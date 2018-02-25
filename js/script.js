$('.content-block').css('min-height', window.innerHeight);
$(".goto").click(function() {   
    var getID =$(this).data('id');  
    if(getID){
        $('html,body').animate({scrollTop:$('#' + getID).offset().top},'slow' );
    }  
   
});

$(".single-item").slick({
	dots: true ,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:true
});
$('#silder-content').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
          }
      },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
          }
      },
      {
          breakpoint: 1022,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: true
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
          }
      }

   ]
});
$('#contactFieldName,#contactFieldEmail,#contactFieldPhone,#contactFieldMsg').on('focus', function () {
  $(this).removeClass('input-error');
  $(this).siblings('.input-error-message').removeClass('is-visible');
});
$('#contactSendMsgBtn').on('click', function () {
  var contactName = $('#contactFieldName').val();
  var contactEmail = $('#contactFieldEmail').val();
  var contactPhone = $('#contactFieldPhone').val();
  var contactMsg = $('#contactFieldMsg').val();
  if (contactName == '') {
      $('#contactFieldName').addClass('input-error');
      $('#contactFieldName').siblings('.input-error-message').addClass('is-visible');
      return;
  }
  if (contactEmail == '') {
      $('#contactFieldEmail').addClass('input-error');
      $('#contactFieldEmail').siblings('.input-error-message').addClass('is-visible');
      return;
  }
  if (contactPhone == '') {
      $('#contactFieldPhone').addClass('input-error');
      $('#contactFieldPhone').siblings('.input-error-message').addClass('is-visible');
      return;
  }
  if (contactMsg == '') {
      $('#contactFieldMsg').addClass('input-error');
      $('#contactFieldMsg').siblings('.input-error-message').addClass('is-visible');
      return;
  }
});


			
  
