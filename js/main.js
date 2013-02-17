$(function() {
    $('.toc_title').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 250);
    });
    var waypoints = $.waypoints().vertical;
    waypoints.forEach(function(w){
        var id = $(w).text().replace(/ /g,'_');
        $.attr(w,'id','_'+id);
        var className;
        if ($(w).prop('tagName') == 'H1') {
            className = 'toc_h1';
        }
        else {
            className = 'toc_h2';
        }
        var el = $('<a/>',
                   {
                       href: "#",
                       id: 'toc_'+id,
                       class: className,
                       text: $(w).text()
                   });
        el.click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(w).offset().top - 120
            }, 250);
        });
        el.appendTo('.toc');
    });
});

$('.content h2').waypoint(function() {
//    var waypoints = $.waypoints().vertical;
//    waypoints.forEach(function(w){
//        $(w).css('color','white');
//    });
//    $('#toc'+ $(this)[0].id).css('color','red');
}, {offset: 130});

$('.content h1').waypoint(function() {
//    var waypoints = $.waypoints().vertical;
//    waypoints.forEach(function(w){
//        $(w).css('color','white');
//    });
//    $('#toc'+ $(this)[0].id).css('color','red');
}, {offset: 130});
