function navBar() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function footer(element) {
    if (element.className === 'close') {
        element.className = '';
    } else {
        element.className = 'close'
    }
}
{
    let bar = document.getElementById("progress");
    window.onscroll = function () { Scrolling(); }
    function Scrolling() {
        let scrollheight = document.body.scrollHeight - document.documentElement.clientHeight;
        let scrollprecentage = window.pageYOffset / scrollheight * 100;
        bar.style.width = scrollprecentage + "%";
    }
}

function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
