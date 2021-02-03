$(document).ready(function (){
	
	
	//Search Popup
	if($('#search-popup').length){
		
		//Show Popup
		$('.search-btn').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}
	
	var $win = $(window); // or $box parent container
	var $box = $(".header-menu");
	$win.on("click.Bst", function(event){
	    if ($box.has(event.target).length == 0 && !$box.is(event.target)){
	       $('.header-menu ul.open').slideUp().removeClass('open');
	    }
	});
	
	$('#menu-button').click(function(){
	    let svg_close = `<svg class="menu-list-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
            <g>
            	<g>
            		<path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z"/>
            	</g>
            </g>
            </svg>`;
	   // $(this).find('svg').remove();
	   // $(this).before(svg_close);
	});

	if($('#adminbar').length > 0)
	{
		$('.sticky-header').addClass('mt-20');
		var height_ = $('#adminbar').innerHeight();
		$('.main-header').css('margin-top', height_ + 'px');
		$('.sticky-header').css('margin-top', height_ + 'px');
	}
	
	if($('.child-product-hover').length > 0){
        $('body').on('mousemove', '.child-product-hover img', function(){
            let src = $(this).attr('src');
            $(this).parents('.mirora-product').find('.primary-image').attr('src', src);
            console.log(src);
        });
    }
	
	if($('.price-section').length > 0){
        $('.price-section .price-item').mousemove(function(){
            $('.price-section .price-item').removeClass('active');
        }).mouseleave(function(){
            $('.price-section .price-item').eq(0).addClass('active');
        });
    }
    
	var btn_slide_next = '>';
	var btn_slide_prev = '<';
	if($('.one-sliders').length > 0 && $('.one-sliders.slick-initialized.slick-slider').length == 0)
	{
        $('.one-sliders').slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrow: false,
            infinite: true,
            nextArrow: '',
            prevArrow: '',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
        });
	}
	if($('.sliders-banner').length > 0 && $('.sliders-banner.slick-initialized.slick-slider').length == 0)
	{
        $('.sliders-banner').slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: false,
            infinite: true,
            nextArrow: '',
            prevArrow: '',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  variableWidth: false,
                  centerMode: false,
                }
              }
            ]
        });
	}
	
	if($('.three-sliders').length > 0 && $('.three-sliders.slick-initialized.slick-slider').length == 0)
	{
        $('.three-sliders').slick({
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
		    arrows: false,
            infinite: true,
            nextArrow: '',
            prevArrow: '',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
        });
	}
	
	if($('.four-sliders').length > 0 && $('.four-sliders.slick-initialized.slick-slider').length == 0)
	{
        $('.four-sliders').slick({
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
		    arrows: false,
            infinite: true,
            nextArrow: '',
            prevArrow: '',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              }
            ]
        });
	}
	
	if($('.six-slider').length > 0 && $('.six-slider.slick-initialized.slick-slider').length == 0)
	{
        $('.six-slider').slick({
            autoplay: false,
            slidesToShow: 6,
            slidesToScroll: 5,
            dots: true,
            infinite: true,
		    arrows: false,
            nextArrow: '',
            prevArrow: '',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 5,
                }
              },
              {
                breakpoint: 990,
                settings: {
                  slidesToShow: 5,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 6,
                }
              }
            ]
        });
	}

  var id = 0;
  var arr = [];

  function getImg(id){
    $.ajax({
      async: false,
      url: urlRotate,
      data: {id: id},
      dataType: 'json',
      method: 'post',
      success: function(result){
        let data = result.data;
        arr = result.data;
      }
    })
    return arr;
  }

  var i = 0;
  var stop = false;
  var Ox = 0;

  $('.rotate-360').click(function(){
    id = $(this).data('id');
    let data = getImg(id);
    let html = '<div class="box-img-rotate relative"><img src="' + data[0].image + '" class="img360"></div>';
    $('.modal .modal-body').html(html);
    $('.modal').modal('show');
  });

  $('body').on('shown.bs.modal', '.modal', function(){
    let max = arr.length;
    loadimg360();
  }).on('hide.bs.modal', function(){
    clearInterval(timer);
    $('.modal .modal-body').html('');
    stop = false;
    i = 0;
  });

  const lastPoint = {x: null, y: null};

  $('body').on('click', '.box-img-rotate', function(){
    if(stop == true)
    {
      stop = false;
      loadimg360();
    }
    else{
      stop = true;
    }
  }).on('mousewheel', '.box-img-rotate', function(e){
    if(stop == false)
    {
        stop = true;
    }
    if( e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
        i--;
        if(i == 0)
        {
          i = arr.length - 1;
        }
        img = arr[i].image;
        $('.modal img.img360').attr('src', img);
     }else {
        i++;
        if(i == arr.length)
        {
          i = 0;
        }
        img = arr[i].image;
        $('.modal img.img360').attr('src', img);
     }
  }).on('mousemove', '.box-img-rotate', function(e){
    // console.log(e.which);
    if(e.which == 1) {

    const leftOrRight = (
      e.clientX > lastPoint.x ? 'right'
      : e.clientX < lastPoint.x ? 'left'
      : 'none'
    )
    // console.log(e.clientX);
    // console.log(lastPoint);
    if(e.clientX < lastPoint.x) {
        //scroll up
        console.log('LEft');
        i--;
        if(i == 0)
        {
          i = arr.length - 1;
        }
        img = arr[i].image;
        $('.modal img.img360').attr('src', img);
     }else {
        //scroll down
        // console.log('Right');
        i++;
        if(i == arr.length)
        {
          i = 0;
        }
        img = arr[i].image;
        $('.modal img.img360').attr('src', img);
     }
   }

    lastPoint.x = e.clientX;
  });

  function loadimg360(){
    var max = arr.length;
    var img = '';

    timer = setInterval(function(){
      img = arr[i].image;
      $('.modal img.img360').attr('src', img);

      i++;

      if(i == max)
      {
        i = 0;
      }

      if(stop == true)
      {
        clearInterval(timer);
      }
    }, 100);
  }
  
  if($('.list-attribute').length > 0)
  {
      $('.list-attribute').find('.item').eq(0).trigger('click');
  }
  
    if($('.product-details-thumbnail').length > 0)
    {
        $('#thumbmenu-horizontal').change(function(){
            var length = $('.product-details-thumbnail .slick-active').length;
            var src = $('.product-details-thumbnail .slick-active').eq(length-1).find('img').attr('src');
            console.log(src);
        });
    }
  
  
});