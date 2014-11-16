jQuery(document).ready(function($) {

    var siteUrl = 'http://'+(document.location.hostname||document.location.host);
    $('.rss').click(function(){
        window.location=siteUrl+$(this).attr("href");
    });
    $('.tag-link').click(function(){
        $('.loading').css("display","block");
        History.pushState({}, "", this.pathname);
        console.log($(this).attr('data-target'));

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
            $('.content').html($(data).find('.content'));
            $("html, body").animate({ scrollTop: 0 }, "normal");
            $('#disqus_thread').remove();
            $('#disq').remove();
            $('#comment').append("<div id='disqus_thread'></div>\n<script type='text/javascript' id='disq'>\n/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */\nvar disqus_shortname = 'geekpradd'; // required: replace example with your forum shortname\n\n/* * * DON'T EDIT BELOW THIS LINE * * */\n(function() {\nvar dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\ndsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\n})();\n</script>\n<noscript>Please enable JavaScript to view the <a href='http://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>");
            console.log(State.url);
            _gaq.push(['_trackPageview', State.url]);
        });
    });
    function scrollToId(id,path){
        var state=History.getState();
        while (state.url!=path){
            var state=History.getState();
        }
        $('html, body').animate({
        scrollTop: $("#"+id).offset().top
    }, 400);
    }
});
