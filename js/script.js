// On écoute le click sur les éléments qui ont la classe .nav-item
$('.nav-item').click(function (event) {
    // console.log(event);
    // event.currentTarget == this
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});
