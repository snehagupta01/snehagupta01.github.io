/**
 * Created by Eleven on 03-01-2019.
 */

let viewportWidth, viewportHeight;
let canHideBall = false;

function viewport() {
    viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function letJqueryWork(){
    setTimeout( function () {
        const ball2 = $(".ball").clone(true);
        let top, left;
        if( viewportWidth < 992) {
            top = "-70px";
            left = "47%";
        }
        else {
            top = "75px";
            left = "258px";
        }

        $(".preloading").fadeOut( function () {
            $("body").append(ball2);
            $(".preloader").remove();
            $(".ball").animate({
                top: top,
                left : left,
                margin: 0,
                zIndex: 9,
                minHeight : "70px",
                minWidth : "70px",

            },600, function () {
                canHideBall = true;
            });
        });
    }, 500, );
}

function expand() {
    const ball = $(".ball")[0];

    anime({
        targets : ball,
        minHeight : "300vh",
        minWidth : "300vh",
        duration: 800,
        easing : "easeInOutBack",
        complete : function (a) {
            anime.remove(ball);
            letJqueryWork();
        }
    });
}

function bounce () {
    const tl = anime.timeline({
        targets: $(".ball")[0],
        duration: 400,
        easing: 'easeInCubic',
        loop: true
    });

    tl
        .add({
            marginTop: "50vh"
        })
        .add({
            easing: 'easeOutCubic',
            marginTop: 0
        });
}

$(document).ready(function () {
    viewport();
    const ball = '<div class="red ball fixed-center"></div>';
    $(".preloader").append(ball);
    bounce();
});

$(window).on("load", function() {
    setTimeout(function () {
        anime.remove($(".ball")[0]);
        expand();
    }, 1500);
});

$(window).resize( function() {
    viewport();
    if(viewportWidth < 992 && canHideBall) {
        $(".ball").fadeOut();
        canHideBall = false;
    }
    if(viewportWidth >= 992 && !canHideBall) {
        $(".ball").css({
            top: "75px",
            left: "205px"
        }).fadeIn();
        canHideBall = true;
    }
});