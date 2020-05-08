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
            }
            appendBackButton();
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
    
}