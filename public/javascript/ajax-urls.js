jQuery(document).ready(function($) {

    var siteUrl = 'http://'+(document.location.hostname||document.location.host);

    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
        e.preventDefault();
        $('.loading').css("display","block");
        History.pushState({}, "", this.pathname);
    });

    History.Adapter.bind(window, 'statechange', function(){
        var State = History.getState();
        $.get(State.url, function(data){
            $title=$(data).filter('title').text();

            $('.loading').css("display","none");
            document.title = $title;
            $('.content').html($(data).find('.content'));
            $("html, body").animate({ scrollTop: 0 }, "normal")
            _gaq.push(['_trackPageview', State.url]);
        });
    });

});
