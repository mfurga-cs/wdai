window.addEventListener('scroll', function(e) {
    let nav = document.getElementById("header");

    let curr = this.scrollY;

    let sec1 = document.getElementById("sec1").offsetTop;
    let sec2 = document.getElementById("sec2").offsetTop;
    let sec3 = document.getElementById("sec3").offsetTop;
    let sec4 = document.getElementById("sec4").offsetTop;

    if (curr > sec1) {
        document.getElementById("navbar").style.background = "#ffc6c6";
        document.querySelectorAll("#navbar button").forEach(el => el.style.color = "#0006fb");
    } else {
        document.getElementById("navbar").style.background = "#fff";
        document.querySelectorAll("#navbar button").forEach(el => el.style.color = "#fff");
    }

    if (curr > sec2) {
        document.getElementById("navbar").style.background = "#ff8383";
        document.querySelectorAll("#navbar button").forEach(el => el.style.color = "#00fb71");
    }

    if (curr > sec3) {
        document.getElementById("navbar").style.background = "#ff4c4c";
        document.querySelectorAll("#navbar button").forEach(el => el.style.color = "#fbe900");
    }

});