$(document).ready(function() {
    $(window).scroll(function() {
        var scrollt = document.documentElement.scrollTop +
                      document.body.scrollTop;
        if(scrollt < 400) {
            if ($("#post_meta .meta-toc").length > 0) {
                $("#post_meta .meta-toc").fadeTo(100, 1);
            }
        }
        else {
            if ($("#post_meta .meta-toc").length > 0) {
                // $("#post_meta .meta-toc").fadeTo(100, 0.2);
            }
        }
    });

    $("#post_meta .meta-toc").mouseenter(function() {
        if ($("#post_meta .affix").length > 0) {
            $("#post_meta .affix").fadeTo(100, 1);
        }
    });
    $("#post_meta .meta-toc").mouseleave(function() {
        if ($("#post_meta .affix").length > 0) {
            // $("#post_meta .affix").fadeTo(100, 0.2);
        }
    });
});
