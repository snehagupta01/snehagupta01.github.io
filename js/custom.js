$(document).ready( function () {
    appendCurvedUnderline();
});
function appendCurvedUnderline() {
    const underline = '<div class="underline"> <img src="images/curved.svg"></div>';
    $(".tile-heading").each( function () {
        $(this).append(underline);
    });
}