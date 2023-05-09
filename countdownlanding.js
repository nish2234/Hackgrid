var countdown = new Date("Apr 7 , 2023 00:00:00").getTime();
var x = setInterval(() => {
    var current = new Date().getTime();
    var distance = countdown-current;
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("ch").innerHTML = (days < 10) ? '0' + days.toString() : days.toString();
    document.getElementById("a").innerHTML = (days < 10) ? '0' + days.toString() : days.toString();
    document.getElementById("b").innerHTML = (hours < 10) ? '0' + hours.toString() : hours.toString();
    document.getElementById("c").innerHTML = (minutes < 10) ? '0' + minutes.toString() : minutes.toString();
    document.getElementById("d").innerHTML = (seconds < 10) ? '0' + seconds.toString() : seconds.toString();
}, 1000);
