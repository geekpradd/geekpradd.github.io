jQuery(document).ready(function($) {

    var siteUrl = 'http://'+(document.location.hostname||document.location.host);

    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
        e.preventDefault();
        History.pushState({}, "", this.pathname);
    });

    History.Adapter.bind(window, 'statechange', function(){
        var State = History.getState();
        $.get(State.url, function(data){
            $title=$(data).find("title");
            console.log($title);
            document.title = $title;
            $('.content').html($(data).find('.content'));
            _gaq.push(['_trackPageview', State.url]);
        });
    });

});
