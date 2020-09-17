let activeTile = -1;
let activeScreen = -1;

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

function appendSlideShow(list) {
    let indicators = '<ol class="carousel-indicators">\n';
    let carouselItems = '';
    for(let i = 0; i < list.length; i++){
        let classList = "";
        if(i === 0) classList = "active";
        indicators += '<li data-target="#carrr" data-slide-to="'+i+'" class="'+ classList+'"></li>\n';
        carouselItems += '<div class="carousel-item h-100 '+classList+'">\n' +
            '        <img src="'+list[i].link+'" alt="...">\n' +
            '        <div class="carousel-caption">\n' +
            '          <h5 class="dark-text">'+list[i].name+'</h5>\n' +
            '          <p class="font-italic text-muted">'+list[i].description+'</p>\n' +
            '        </div>\n' +
            '      </div>\n';
    }
    indicators += '</ol>\n' ;

    const data = '<div class="row">\n' +
        '  <div id="carrr" class="carousel slide col-12" data-ride="carousel">\n' +
        indicators +
        '    <div class="carousel-inner text-center">\n'
            + carouselItems +
        '    </div>\n' +
        '<div class="controls next central"> <i class="material-icons">chevron_right</i> </div>' +
        '<div class="controls prev central"> <i class="material-icons">chevron_left</i> </div>' +
        '  </div>\n' +
        '</div>';

    $(".data-holder").append(data);
    $(".carousel-indicators li").eq(0).click();
    $(".controls.next").on("click", function () {
        $(".carousel").carousel('next');
    });
    $(".controls.prev").on("click", function () {
        $(".carousel").carousel('prev');
    })
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

function appendSkillsInfo(list) {
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
            html+= '<h5 class="text-muted mt-2 '+classList2+'">'+ list[0].data[i].data[j].val +'</h5>';
        }
        html+= '</div>';
    }
    html+= '</div>';
    $(".content").append(html);
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
                    {val : "Good debugging skills"},
                    {val : "Programming Enthusiast"},
                    {val : "Keen eye for good designs"},
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

function appendProjects(index) {
    const heads = ['WEB', 'GAMES'];
    let projects;
    if(index === 0) projects = [
        
        {name : "PicStagram", link: "assets/images/projects/web/picasa.png", description: "My Project"},
        {name : "HackOCommune", link: "assets/images/projects/web/hackocommune.png", description: "My Project"},
        {name : "My-PORTFOLIO", link: "assets/images/projects/web/portfolio.png", description: "My Project"},

    ];
    else if(index === 1) projects = [
        {name : "KBC", link: "assets/images/projects/games/kbc.png", description: "GAME"},
        {name : "Tic Tac Toe", link: "assets/images/projects/games/tic.png", description: "GAME"}
    ];
    appendDataHolder(heads, index);
    appendSlideShow(projects);
}
function appendSkills(index) {
    const heads = ['PROGRAMMING', 'DATABASE', 'FRONT_END & BACK_END'];
    let skills;
    if(index === 0) skills = [{
        data: [
            {
                title: 'PROGRAMMING',
                data: [
                    {val : "C"},
                    {val : "JAVA"},
                    {val : "PYTHON"},
                ]
            },
        ]
    }];
    else if(index === 1) skills = [{
        data: [
            {
                title: 'DATABASE',
                data: [
                    {val : "SQL"},
                    {val : "MONGODB CLUSTERS"}
                ]
            }
        ]
    }];
    else if(index === 2) skills = [{
        data: [
            {
                title: 'FRONTEND',
                data: [
                    {val : "jQuery"},
                    {val : "CSS3, SCSS"},
                    {val : "HTML5 & Responsive Designs"},
                ]
            },
            {
                title: 'BACKEND',
                data: [
                    {val : "NODEJS"},
                    {val : "EXPRESS"},
                    {val: "PYTHON"}
                ]
            },
            {
                title: 'Authorization',
                data: [
                    {val : "JWT TOKENS"},
                ]
            },
            {
                title: 'and...',
                data: [
                    {val : "Knowledge of Git"},
                ]
            }
        ]
    }];
    appendDataHolder(heads, index);
    appendSkillsInfo(skills);
}

function appendTileData(index) {
    if( activeTile === 1){
        appendProjects(index);
    }
    else if( activeTile === 2){
        appendSkills(index);
    }
    else if( activeTile === 3){
        appendAbout(index)
    }
}

function onCircleClick() {
    $(".circle").on("click", function (e) {
        if(activeTile !== 0){
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

function appendCircles() {
    let data = null;
    if(activeTile === 0) {
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">'+
            '<div class="col-lg-5 col-12">' +
            '<div class="central circle font-weight-bold home">' + '<div>Sneha Gupta' +
            '<h4 class="mt-3">Full Stack Developer</h4>' +
            '<h4 class="mt-2">Programmer</h4>' +
            '<section class="social central w-100">' +
            '<a target="_blank" href="https://github.com/snehagupta01" class="p-3"><img alt="" src="assets/images/social/github.svg"></a>' +
            '<a target="_blank" href="https://www.linkedin.com/in/sneha-gupta-046806193/" class="p-3"><img alt="" src="assets/images/social/linkedin.svg"></a>' +
            '<a target="_blank" href="https://mail.google.com/mail" class="p-3"><img alt="" src="assets/images/social/gmail.svg"></a>'  +
            '</section>' +
            '<section class="central mt-4">' +
            '<a href="assets/sneha.pdf" target="_blank" class="btn btn-dark central">Resume <i class="material-icons">file_download</i></a>' +
            '</section>' +
            '</div>' +
            '</div>' +
            '</div>'+
            '</section>' +
            '</article>';
    }
    else if(activeTile === 1) {
        const t = ['WEB', 'GAMES'];
        const img = ['assets/images/web.svg','assets/images/ux.svg'];
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">';
        for( let i = 0; i < t.length; i++){
            data += '' +
                '<div class="col-lg-3 col-6">' +
                '<div class="central circle">' +
                '<div><img src="'+ img[i]+'" class="mr-1 mr-lg-3"></div>' + t[i] +
                '</div>' +
                '</div>';
        }
        data += '</section>' +
            '</article>';
    }
    else if(activeTile === 2) {
        const t = ['LANG.', 'DATABASE', 'FULL STACK'];
        const img = ['assets/images/web.svg','assets/images/web.svg','assets/images/web.svg'];
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">';
        for( let i = 0; i < t.length; i++){
            data += '' +
                '<div class="col-lg-3 col-6">' +
                '<div class="central circle">' +
                '<div><img src="'+ img[i]+'" class="mr-1 mr-lg-3"></div>' + t[i] +
                '</div>' +
                '</div>';
        }
        data += '</section>' +
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

function appendDownButton() {
    const downArrow = '<div class="round-button removable central text-white">' +
        '<i class="material-icons">arrow_downward</i>' +
        '</div>';
    $(".quarter").eq(activeTile).append(downArrow);
    $(".removable").addClass("fading-in");
    onDownArrowClick()
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
function appendCurvedUnderline() {
    const underline = '<div class="underline"> <img src="assets/images/curved.svg"></div>';
    $(".tile-heading").each( function () {
        $(this).append(underline);
    });
}

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

$(document).ready( function () {
    appendCurvedUnderline();
    onTileClick();
});