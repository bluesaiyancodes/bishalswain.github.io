function indexfunc(){
    var x = document.getElementById("aboutdiv");
    var y = document.getElementById("projectdiv");
    var z = document.getElementById("contactdiv");
//    if (x.style.display === "none")
 //       x.style.display = "block";
 //   else
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        //smoothScroll()
}

function aboutfunc(){
    var a = document.getElementById("projectdiv");
    a.style.display = "none";
    var b = document.getElementById("contactdiv");
    b.style.display = "none";
    var x = document.getElementById("aboutdiv");
    x.style.display = "block";
    smoothScroll(x)
}

function projectfunc(){
    var a = document.getElementById("aboutdiv");
    a.style.display = "none";
    var b = document.getElementById("contactdiv");
    b.style.display = "none";
    var x = document.getElementById("projectdiv");
    x.style.display = "block";
    smoothScroll(x);
}

function contactfunc(){
    var a = document.getElementById("aboutdiv");
    a.style.display = "none";
    var b = document.getElementById("projectdiv");
    b.style.display = "none";
    var x = document.getElementById("contactdiv");
    x.style.display = "block";
    smoothScroll(x);
}




window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}








