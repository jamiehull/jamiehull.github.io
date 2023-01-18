$(document).ready(function(){
    $('.header').height($(window).height());
})

$(document).ready(function(){
    $("#news-placeholder").load("/blog.html");
});

$(document).ready(function(){
    $("#nav-placeholder").load("/nav.html");
});

$(document).ready(function(){
    $("#footer-placeholder").load("/footer.html");
});

$(document).ready(function(){
    $("#donate-button-placeholder").load("/donate_button.html");
});

$(document).ready(function()
{
    $("#conditional").hide();
});