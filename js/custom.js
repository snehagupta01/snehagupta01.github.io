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
    $(".quarter")
        .on("click", function (e) {
            if($(this).hasClass("clickable")){
                activeScreen = 1;
                activeTile = $(this).index();
                const removeClassList = "clickable q-inactive q-inactive-"+parseInt(activeTile + 1);
                const addClassList = "q-active q-active-"+parseInt(activeTile + 1);
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
    $(".quarter")
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
    $(".quarter").eq(activeTile).append(downArrow);
    $(".removable").addClass("fading-in");
    onDownArrowClick()
}
function backBoxClick() {
    $(".back-box").on("click", function () {
        const removeClassList = "q-active q-active-"+parseInt(activeTile + 1);
        const addClassList = "q-inactive q-inactive-"+parseInt(activeTile + 1);
        $('.quarter')
            .eq(activeTile)
            .removeClass(removeClassList)
            .addClass(addClassList)
            .css("cursor", "pointer");
        $(".removable").fadeOutRemove();
        $(this).fadeOutRemove( function () {
            $('.quarter')
                .eq(activeTile)
                .addClass("clickable")
                .css( { zIndex : 1 } );
            if( activeScreen === 2) {
                $(".quarter").eq(activeTile).find(".tile").removeClass("animated fadeOutUp d-none").addClass("animated fadeInDown");
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
            $(".quarter").eq(activeTile).find(".tile").addClass("animated fadeOutUp");
            const data = appendCircles();
            setTimeout( function () {
                $(".quarter").eq(activeTile).append(data).find(".tile").addClass("d-none");
                onCircleClick();
            }, 1200);
        }

    });

}
function appendCircles() {
    let data = null;
    if(activeTile === 0) {
        data ='<article class="container removable">' +
        '<section class="row animated fadeInUp justify-content-center">'+
        '<div class="col-lg-5 col-12">' +
        '<div class="central circle font-weight-bold home">' + '<div>Sneha Gupta' +
        '<h4 class="mt-3">Full Stack Developer</h4>' +
        '<h4 class="mt-2">Competitive Programmer</h4>' +
        '<section class="social central w-100">' +
        '<a target="_blank" href="https://github.com/snehagupta01" class="p-3"><img alt="" src="images/github.svg"></a>' +
        '<a target="_blank" href="https://www.linkedin.com/in/sneha-gupta-046806193/" class="p-3"><img alt="" src="images/linkedin.svg"></a>' +
        '<a target="_blank" href="https://mail.google.com/mail" class="p-3"><img alt="" src="images/gmail.svg"></a>' +
        '</section>' +
        '<section class="central mt-4">' +
        '<a href="sneha.pdf" target="_blank" class="btn btn-dark central">Resume <i class="material-icons">file_download</i></a>' +
        '</section>' +
        '</div>' +
        '</div>' +
        '</div>'+
        '</section>' +
        '</article>';
    }
    else if(activeTile === 1) {
        const t = ['PicStagram','HackOCommune','My-PORTFOLIO','PIZZA-HUT APP','KBC GAME'];
        const href = ['https://picasa1.herokuapp.com/','https://myhackocommuneapp.herokuapp.com/','https://snehagupta01.github.io','https://github.com/snehagupta01/PIZZAHUT-PROJECT','https://github.com/snehagupta01/Kbc-game'];
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">';
        for( let i = 0; i < t.length; i++){
            data += '' +
            '<div class="col-lg-3 col-6">' +
            '<div class="central circle">' +
            '<div><a href='+ href[i] +' class="mr-1 mr-lg-3" target="_blank"></div>' + t[i] +
            '</a></div>' +
            '</div>';
        }
        data += '</section>' +
            '</article>';
    }
    else if(activeTile === 2) {
        data ='<article class="container removable">' +
        '<section class="row animated fadeInUp justify-content-center">'+
        '<div class="col-lg-5 col-12">' +
        '<div class="container" style="background-color:white;padding:50px;border-radius:20%">' + 
        '<div class="progress" style="margin-top:20px;height:25px;">'+
        '<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:85%">JAVA</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width:95%;">C</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width:95%">PYTHON</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:95%">HTML</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:80%">CSS</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width:78%">JAVASCRIPT</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width:75%">JQUERY</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:85%">BOOTSTRAP</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:72%">AJAX</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width:82%">FLASK</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:92%">DATA STRUCTURES</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:75%">NODE JS</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width:90%">DATABASES</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width:60%">APIs</div>'+
      '</div>'+
      '<div class="progress" style="margin-top:10px;height:25px;">'+
        '<div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width:65%">PHP</div>'+
      '</div>'+
        '</div>'+
        '</div>'+
        '</section>' +
        '</article>';
        
    }
    else if(activeTile === 3) {
        const t = ['Contact', 'Strengths', 'Weakness', 'Interests'];
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">';
        for( let i = 0; i < t.length; i++){
            data += '<div class="col-lg-3 col-6 mt-4">' +
                '<div class="central circle "><span class="primary-font">' + t[i] +
                '</span></div>' +
                '</div>';
        }
        data += '</section>' +
            '</article>';
    }
    return data;
}
function onCircleClick() {
    $(".circle").on("click", function (e) {
        if(activeTile !== 0&&activeTile!==1 && activeTile!==2){
            const index = $(this.parentNode).index();
            var fc = '<div class="fixed-circle"></div>';
            $('body').prepend(fc);
            $(".fixed-circle")
                .css({
                    top: e.clientY+"px",
                    left: e.clientX+"px",
                });
            setTimeout( function () {
                appendTileData(index);
            }, 800);
        }
    });
}
function appendTileData(index) {
    if( activeTile === 3){
        appendAbout(index)
    }
}
function appendAbout(index) {
    const heads = ['Contact', 'Strengths', 'Weakness', 'Interests'];
    let aboutData;
    if(index === 0) aboutData = [{
        data: [
            {
                title: 'Contact me',
                data: [
                    {val : "snehagupta0701@gmail.com"},
                    
                ]
            }
        ]
    }];
    else if(index === 1) aboutData = [{
        data: [
            {
                title: 'General',
                data: [
                    {val : "Love solving competitive problems"},
                    {val : "Almost crazy about designs"},
                    {val : "Learner"},
                    {val : "Keen eye for good designs and designers"},
                    {val : "Learning Enthusiast"},
                ]
            },
            {
                title: 'Technical',
                data: [
                    {val : "Programming : c, java ,python"},
                    {val : "Database : MongoDB Clusters"},
                    {val : "Front-end : Html CSS Bootstrap ReactJs"},
                    {val : "Back-end : NodeJs and ExpressJs"},
                    {val : "Authentication : JsonWebtokens"}
                ]
            }
        ]
    }];
    else if(index === 2) aboutData = [{
        data: [
            {
                title: 'Weakness',
                data: [
                    {val : "Can't pause PUBG in between"},
                    {val : "Very trusting in nature"},
                ]
            }
        ]
    }];
    else if(index === 3) aboutData = [{
        data: [
            {
                title: 'Hobbies',
                data: [
                    {val : "Love to code in free time"},
                    ]
            }
        ]
    }];
    appendDataHolder(heads, index);
    appendAboutInfo(aboutData);

}
function appendDataHolder(heads, index) {
    const holder = '<div class="data-holder"></div>';
    $('body').append(holder).find(".data-holder").animate({ opacity :1 }, 300);
    const header = '<div class="heading">' +
        '<div class="heads">' + heads[index] +
        '</div>' +
        '<div class="close-button central"> <i class="material-icons">close</i></div>' +
        '</div>';
    $(".data-holder").append(header);
    closeAction();
}

function closeAction() {
    $(".close-button").on("click", function () {
        $(".fixed-circle").remove();
        $(".data-holder").fadeOutRemove();
    });
}
function appendAboutInfo(list) {
    const content = '<div class="content"></div>';
    $(".data-holder").append(content);
    let html = '<div>';
    for(let i = 0; i < list[0].data.length; i++){
        let classList = "";
        if(i !== 0) classList = "mt-5";
        html += '<div class="dark-text '+classList+'">' +
            '<h3 class="skill-title font-italic">'+ list[0].data[i].title+'<div class="skill-bar"></div></h3>';

        for( let j = 0; j < list[0].data[i].data.length; j++){
            let classList2 = "";
            if(j === 0) classList2 = "mt-4";
            html+= '<h5 class="text-muted my-3 '+classList2+'">'+ list[0].data[i].data[j].val +'</h5>';
        }
        html+= '</div>';
    }
    html+= '</div>';
    $(".content").append(html);
}