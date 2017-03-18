

(function($){
    'use strict';



    //menu options
    var fixed_top = $(".main-menu");
    var fixed_top_two = $(".menu-two");
    var fixed_top_four = $(".menu-four");

    $(window).on('scroll', function(){
      
      if( $(this).scrollTop() > 100 ){  
        fixed_top.addClass("animated fadeInDown");
      }
      else{
        fixed_top.removeClass("animated fadeInDown");
      }
	  
	  if( $(this).scrollTop() > 100 ){  
        fixed_top_two.addClass("menu-two-bg");
      }
      else{
        fixed_top_two.removeClass("menu-two-bg");
      }
	  
	  if( $(this).scrollTop() > 100 ){  
        fixed_top_four.addClass("menu-four-bg");
      }
      else{
        fixed_top_four.removeClass("menu-four-bg");
      }
      
    });


	//counter up
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {
        duration: 2000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });  

  });


	//Product list grid view
	var list = $("#list");
	var grid = $("#grid");
	list.on('click', function(){    
	  $('.product-item-grid').animate({opacity:0},function(){
		  $('.grid').removeClass('grid-active');
		  $('.list').addClass('list-active');
		  $('.product-item-grid').attr('class', 'product-item-list shadow');
		  $('.product-item-list').stop().animate({opacity:1});
	  });
	});

	grid.on('click', function(){  
	  $('.product-item-list').animate({opacity:0},function(){
		  $('.list').removeClass('list-active');
		  $('.grid').addClass('grid-active');
		  $('.product-item-list').attr('class', 'product-item-grid shadow');
		  $('.product-item-grid').stop().animate({opacity:1});
	  });
	});



  //lightcase
  $('a[data-rel^=lightcase]').lightcase();


  //masonery
  $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  })



  //Sponsor one
  var swiper = new Swiper('.sponsor-slider-one', {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: 2000,
      loop: true,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        }
      }
    });

  //Sponsor two
  var swiper = new Swiper('.sponsor-slider-two', {
      slidesPerView: 4,
      spaceBetween: 15,
      autoplay: 1500,
      loop: true,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 767px
        767: {
          slidesPerView: 3
        }
      }
    });

  //Sponsor Three
  var swiper = new Swiper('.sponsor-slider-three', {
      slidesPerView: 5,
      spaceBetween: 15,
      autoplay: 1000,
      loop: true,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 767px
        767: {
          slidesPerView: 4
        }
      }
    });
	
})(jQuery);	  


//data

function sendData(){

  $('#nom, #cel, #dni, #ema, #type, #many, #_dir').css( "border-color", "" );

  var nom = $('#nom').val();
  var cel = $('#cel').val();
  var dni = $('#dni').val();
  var ema = $('#ema').val();
  var typ = $('#type').val();
  var afo = $('#many').val();
  var dir = $('#_dir').val();
  var lat = $('#lat').val();
  var lng = $('#lng').val();

  if(nom.length==0){ alert('Es necesario un nombre de contacto'); return; }
  if(cel.length==0){ alert('Es necesario un número de contacto'); return; }
  if(ema.length==0){ alert('Por favor dejanos tu e-mail'); return; }
  if(typ==0){ alert('Por favor elije un tupo de espacio'); return; }
  if(afo.length==0){ alert('Por favor indique una catidad de aforo');; return; }
  if(dir.length==0){ alert('Es necesario conocer la direccion');; return; }

  var obj = {
      "name": nom,
      "cel": cel,
      "dni": dni,
      "mail": ema,
      "type": typ,
      "aforo": afo,
      "address": dir,
      "lat": lat,
      "lng": lng,
      "state": 1
  }
  $.ajax( { url: "https://api.mlab.com/api/1/databases/santuario/collections/houses?apiKey=Jba31XhHbIXY1RBkADhfk_0XBuiKF9BT",
    data: JSON.stringify( obj ),
    type: "POST",
    contentType: "application/json",
    success: function (data) { if(data._id){ gracias(); }else{ alert("Sucedio algo en el proceso de registro, por favor intentalo nuevamnete, gracias."); } }
    }
  );
}

function gracias(){
  $(".toHide").fadeOut(500);
  $(".toShow").fadeIn(500);
}

$( document ).ready(function() {
  // Handler for .ready() called.
  $.get("https://api.mlab.com/api/1/databases/santuario/collections/houses?apiKey=Jba31XhHbIXY1RBkADhfk_0XBuiKF9BT", function( data ) {
      $(".counter").html(data.length);
  });
});







//------- xD