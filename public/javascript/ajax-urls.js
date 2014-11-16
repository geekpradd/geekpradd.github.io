jQuery(document).ready(function($) {

    var siteUrl = 'http://'+(document.location.hostname||document.location.host);
    $('.rss').click(function(){
        window.location=siteUrl+$(this).attr("href");
    });
    $('.tag-link').click(function(){
        $('.loading').css("display","block");
        History.pushState({}, "", this.pathname);
        console.log($(this).attr('data-target'));
        $.scrollTo('#'+$(this).attr('data-target'),400);
    });
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
            $('.post').html($(data).find('.post'));
            $('.related').html($(data).find('.related'));
            $("html, body").animate({ scrollTop: 0 }, "normal");
            DISQUS.reset({
  reload: true,
  config: function () {
    this.page.identifier = "newidentifier";
    this.page.url = State.url;
  }
});
            console.log(State.url);
            _gaq.push(['_trackPageview', State.url]);
        });
    });

});
