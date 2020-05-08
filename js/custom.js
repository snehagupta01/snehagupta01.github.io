$(document).ready( function () {
    appendCurvedUnderline();
    onTileClick();
});
function appendCurvedUnderline() {
    const underline = '<div class="underline"> <img src="images/curved.svg"></div>';
    $(".tile-heading").each( function () {
        $(this).append(underline);
    });
}
let activeTile = -1;
let activeScreen = -1;
function onTileClick () {
    $(".portion")
        .on("click", function (e) {
            if($(this).hasClass("clickable")){
                activeScreen = 1;
                activeTile = $(this).index();
                const removeClassList = "clickable p-inactive p-inactive-"+parseInt(activeTile + 1);
                const addClassList = "p-active p-active-"+parseInt(activeTile + 1);
                $(this)
                    .css({
                        cursor : "default",
                        zIndex: 2
                    })
                    .removeClass(removeClassList)
                    .addClass(addClassList);
                appendBackButton();
            }
        });
}
function appendBackButton() {
    const back = '<div class="back-box">' +
        '<button class="back-button central"> <i class="material-icons">arrow_back</i> </button>' +
        '<div class="back-text"> Back </div>' +
        '</div>';
    $(".portion")
        .eq(activeTile)
        .append(back)
        .find(".back-box")
        .animate({
            opacity : 1
        });
    appendDownButton();
    backBoxClick();
}
function appendDownButton() {
    const downArrow = '<div class="round-button removable central text-white">' +
        '<i class="material-icons">arrow_downward</i>' +
        '</div>';
    $(".portion").eq(activeTile).append(downArrow);
    $(".removable").addClass("fading-in");
    onDownArrowClick();
}
function backBoxClick() {
    $(".back-box").on("click", function () {
        const removeClassList = "p-active p-active-"+parseInt(activeTile + 1);
        const addClassList = "p-inactive p-inactive-"+parseInt(activeTile + 1);
        $('.portion')
            .eq(activeTile)
            .removeClass(removeClassList)
            .addClass(addClassList)
            .css("cursor", "pointer");
        $(".removable").fadeOutRemove();
        $(this).fadeOutRemove( function () {
            $('.portion')
                .eq(activeTile)
                .addClass("clickable")
                .css( { zIndex : 1 } );
            if( activeScreen === 2) {
                $(".portion").eq(activeTile).find(".tile").removeClass("animated fadeOutUp d-none").addClass("animated fadeInDown");
            }
        });

    });
}
$.fn.fadeOutRemove = function ( callback = function () {} ) {
    $(this)
        .addClass("fading-out")
        .animate({
            opacity : 0,
            transform : "translateY(30px)"
        }, function () {
            $(this).remove();
            callback();
    });
};
function onDownArrowClick() {
    let clicked = true;
    $(".round-button").on("click", function () {
        if(clicked){
            clicked = false;
            activeScreen = 2;
            $(this).addClass("animated fadeOut");
            $(".portion").eq(activeTile).find(".tile").addClass("animated fadeOutUp");
        }

    });

}