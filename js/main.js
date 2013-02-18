$(function() {
    $('#toc_title').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 250);
    });
    $('#toc').find('li').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(e.target.hash).offset().top - 120
        }, 250);
    }); 
});

