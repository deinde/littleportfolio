// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .




////////////video script//////////////
// $(document).ready(function () {

//     $(".player").mb_YTPlayer();

// });




// $("#hero").on('click', function(){
         
//             $("#hero").fadeOut;
//         });


/////////////////////lightbox////////////////



$(document).ready(function(){
 $('.thumbnail').click(function(){
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#myModal').modal({show:true});
 });
});

///////////////////////video/////////////////////////
$(document).ready(function () {

    $(".player").mb_YTPlayer();

});


