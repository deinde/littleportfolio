///////////////hangsta icon/////////////////
$(document).ready(function(){
 $('.three').waypoint(function(direction){
 if(direction == 'down'){
   $('#hangy').addClass('rotate-flip');
  }else{
    $('#hangy').removeClass('rotate-flip');
  }
 },{offset:'220px'});
});
////////////owl tele/////////////////
$(document).ready(function(){
 $('.owl').waypoint(function(direction){
 if(direction == 'down'){
   $('#owl-phone').addClass('owl-tele');
  }else{
    $('#owl-phone').removeClass('owl-tele');
  }
 },{offset:'220px'});
});
////////////owl tablet/////////////
$(document).ready(function(){
 $('.owl').waypoint(function(direction){
 if(direction == 'down'){
   $('#owl-tablet').addClass('owl-tab');
  }else{
    $('#owl-tablet').removeClass('owl-tab');
  }
 },{offset:'200px'});
});

/////////////nav bar//////////////
$(document).ready(function(){
 $('nav').waypoint(function(direction){
 if(direction == 'down'){
   $('nav.navbar.navbar-inverse').addClass('flip-bottom');
  }else{
    $('nav.navbar.navbar-inverse').removeClass('flip-bottom');
  }
 },{offset:'-10px'});
});

$(document).ready(function(){
 $('.jumbotron').waypoint(function(direction){
 if(direction == 'down'){
   $('#overlay').addClass('heysdtrans');
  }else{
    $('#overlay').removeClass('heysdtrans');
  }
 },{offset:'-10px'});
});

$(document).ready(function(){
 $('.one').waypoint(function(direction){
 if(direction == 'down'){
   $('#owl-app').addClass('js-dipper-animate');
  }else{
    $('#owl-app').removeClass('js-dipper-animate');
  }
 },{offset:'350px'});
});


// $(document).ready(function(){
//  $('.sec3').waypoint(function(direction){
//   // $('.tron').addClass('dance');
//   if(direction== 'down'){ 
//   $('#owl').addClass('rotate-flip');
// }else{
//   $('#owl').removeClass('rotate-flip');
//   }
//  }, {offset:'350px'});
// });

// $(document).ready(function(){
//  $('.one').waypoint(function(direction){
//  	// $('.tron').addClass('dance');
//  	if(direction== 'down'){ 
//   $('.para').addClass('dance');
// }else{
// 	$('#phone').removeClass('dance');
//   }
//  }, {offset:'220px'});
// });

// $(document).ready(function(){
//  $('.jum').waypoint(function(direction){
//  	// $('.tron').addClass('dance');
//  	if(direction== 'down'){ 
//   $('.para').addClass('rotate-flip');
// }else{
// 	$('.para').removeClass('rotate-flip');
//   }
//  }, {offset:'50px'});
// });

// $(document).ready(function(){
//  $('.jum').waypoint(function(direction){
//  	// $('.tron').addClass('dance');
//  	if(direction== 'down'){ 
//   $('.para1').addClass('flip-top');
// }else{
// 	$('.para1').removeClass('flip-top');
//   }
//  }, {offset:'350px'});
// });


// $(document).ready(function(){
//  $('.jum').waypoint(function(direction){
//  	// $('.tron').addClass('dance');
//  	if(direction== 'down'){ 
//   $('#buttn2').animate({margin-top:'-9px'});
// }else{
// 	$('#buttn2').animate({margin-top:'200px'});
//   }
//  }, {offset:'50px'});
// });

$(document).ready(function(){
 $('.sec3').waypoint(function(direction){
 	// $('.tron').addClass('dance');
 	if(direction== 'down'){ 
  $('#owl').addClass('rotate-flip');
}else{
	$('#owl').removeClass('rotate-flip');
  }
 }, {offset:'350px'});
});



////////
    /* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
      event.preventDefault();
      var content = $('.modal-body');
      content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);        
        content.html($(this).html());
        $(".modal-profile").modal({show:true});
    });




