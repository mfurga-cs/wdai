$(function() {
    $(document).scroll(function() {
        var nav = $(".header");

        var curr = $(this).scrollTop();

        var sec1 = $("#sec1").offset().top;
        var sec2 = $("#sec2").offset().top;
        var sec3 = $("#sec3").offset().top;
        var sec4 = $("#sec4").offset().top;

        if (curr > sec1) {
            $(".navbar").css("background", "#ffc6c6");
            $(".navbar button").css("color", "#0006fb");
        } else {
            $(".navbar").css("background", "#fff");
            $(".navbar button").css("color", "#fff");

        }

        if (curr > sec2) {
            $(".navbar").css("background", "#ff8383");
            $(".navbar button").css("color", "#00fb71");
        }

        if (curr > sec3) {
            $(".navbar").css("background", "#ff4c4c");
            $(".navbar button").css("color", "#fbe900");
        }

    });
});