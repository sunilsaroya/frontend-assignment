$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
      //  autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

$('.main2').hide()
$('.main3').hide()
$('#pink').click(function() {
    $('.main1').hide();
    $('.main3').hide();
    $('.main2').show(); 
    $(this).css('border', '2px solid blue');
    $('#blue').css('border', '1px solid grey');
    $('#brown').css('border', '1px solid grey');

   
   

});

$('#blue').click(function() {
    $('.main1').hide();
    $('.main2').hide();
    $('.main3').show();   
    $(this).css('border', '2px solid blue');
    $('#pink').css('border', '1px solid grey');
    $('#brown').css('border', '1px solid grey');
   
   
});

$('#brown').click(function() {
    $('.main2').hide();
    $('.main3').hide();
    $('.main1').show();    
    $(this).css('border', '2px solid blue');
    $('#blue').css('border', '1px solid grey');
    $('#pink').css('border', '1px solid grey');
   
});


})

