$(document).ready(function () {
    $(".preloader").fadeOut(2000);
});
$(document).ready(function () {
    ChangeSlidesAuto();
});
$(document).ready(function () {
    ResizeOnLoadSection1();
});
$(document).ready(function () {
    ResizeOnLoadSection2();
});
$(document).ready(function () {
    ResizeOnLoadSection4();
});
$(document).ready(function () {
    ResizeOnLoadSection5();
});
$(document).ready(function () {
    ResizeOnLoadSection6();
});
$(document).ready(function () {
    ResizeOnLoadSection61();
});

$(document).ready(function () {
    ResizeOnLoadSection8();
});

$(document).ready(function () {
    ResizeOnLoadSection13();
});

// SECTION 1

function ShowCurrencyList() {
    var x = document.getElementsByClassName("s1_dropdown_content_currency")[0].classList.contains("show");
    if (x !== true) {
        $(".s1_dropdown_content_currency").addClass("show");
        $(".s1_dropdown_content_user").removeClass("show");
        $(".s1_dropdown_content_search").removeClass("show");
    } else if (x === true) {
        $(".s1_dropdown_content_currency").removeClass("show");
        $(".s1_dropdown_content_user").removeClass("show");
        $(".s1_dropdown_content_search").removeClass("show");
    }
}

function ShowLoginForm() {
    var x = document.getElementsByClassName("s1_dropdown_content_user")[0].classList.contains("show");
    if (x !== true) {
        $(".s1_dropdown_content_user").addClass("show");
        $(".s1_dropdown_content_currency").removeClass("show");
        $(".s1_dropdown_content_search").removeClass("show");
    } else if (x === true) {
        $(".s1_dropdown_content_user").removeClass("show");
        $(".s1_dropdown_content_currency").removeClass("show");
        $(".s1_dropdown_content_search").removeClass("show");
    }
}

function ShowSearchForm() {
    var x = document.getElementsByClassName("s1_dropdown_content_search")[0].classList.contains("show");
    if (x !== true) {
        $(".s1_dropdown_content_search").addClass("show");
        $(".s1_dropdown_content_currency").removeClass("show");
        $(".s1_dropdown_content_user").removeClass("show");
    } else if (x === true) {
        $(".s1_dropdown_content_search").removeClass("show");
        $(".s1_dropdown_content_currency").removeClass("show");
        $(".s1_dropdown_content_user").removeClass("show");
    }
}
$(document).mouseup(function (e) {
    var container1 = $('.s1_dropdown_content_currency');
    var container2 = $('.s1_dropdown_content_user');
    var container3 = $('.s1_dropdown_content_search');
    var container4 = $('.s1_currency');
    var container5 = $('.s1_user');
    var container6 = $('.s1_search');
    if (!container1.is(e.target) && container1.has(e.target).length === 0 &&
        !container2.is(e.target) && container2.has(e.target).length === 0 &&
        !container3.is(e.target) && container3.has(e.target).length === 0 &&
        !container4.is(e.target) && container4.has(e.target).length === 0 &&
        !container5.is(e.target) && container5.has(e.target).length === 0 &&
        !container6.is(e.target) && container6.has(e.target).length === 0) {
        $(".s1_dropdown_content_currency").removeClass("show");
        $(".s1_dropdown_content_search").removeClass("show");
        $(".s1_dropdown_content_user").removeClass("show");
    }
});

// SET CURRENCY VALUE 
$(".s1_currency_value").click(function () {
    $(".s1_dropdown_content_currency").removeClass("show");
    var currencyValue = $(this).text();
    var currencySign = currencyValue.charAt(0);
    $(".s1_current_currency").text(currencyValue);
    $(".s6_8_tile_price_currency").text(currencySign);
});

// ROLL UP LOGIN FORM WHEN "SING IN" BUTTON IS CLICKED
$(".s1_signin").click(function () {
    $(".s1_dropdown_content_user").removeClass("show");
});
// ROLL UP SEARCH SECTION WHEN "SEARCH" BUTTON IS CLICKED
$(".s1_search_button").click(function () {
    $(".s1_dropdown_content_search").removeClass("show");
});

//CHECK WIDTH ON RESIZE AND CHANGE MENU APPEARANCE IF WINDOW IS SMALL
window.addEventListener("resize", function () {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        document.getElementsByClassName("s1_left")[0].style.width = "100%";
        document.getElementsByClassName("s1_right")[0].style.width = "100%";
        document.getElementsByClassName("s1_left")[0].style.backgroundColor = "white";
        document.getElementsByClassName("s1_phone")[0].style.color = "#838383";
        document.getElementsByClassName("s1_email")[0].style.display = "block";
        document.getElementsByClassName("s1_password")[0].style.display = "block";
        document.getElementsByClassName("s1_checkbox")[0].style.display = "block";
        document.getElementsByClassName("s1_signin")[0].style.display = "block";
        $(".s1_signin").css("margin", "auto");

    } else if (w > 640) {
        document.getElementsByClassName("s1_left")[0].removeAttribute("style");
        document.getElementsByClassName("s1_right")[0].removeAttribute("style");
        document.getElementsByClassName("s1_phone")[0].style.color = "white";
        document.getElementsByClassName("s1_email")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_password")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_checkbox")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_signin")[0].style.display = "inline-block";
        $(".s1_signin").css("margin", "");
    }
});

function ResizeOnLoadSection1() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        document.getElementsByClassName("s1_left")[0].style.width = "100%";
        document.getElementsByClassName("s1_right")[0].style.width = "100%";
        document.getElementsByClassName("s1_left")[0].style.backgroundColor = "white";
        document.getElementsByClassName("s1_phone")[0].style.color = "#838383";
        document.getElementsByClassName("s1_email")[0].style.display = "block";
        document.getElementsByClassName("s1_password")[0].style.display = "block";
        document.getElementsByClassName("s1_checkbox")[0].style.display = "block";
        document.getElementsByClassName("s1_signin")[0].style.display = "block";
        $(".s1_signin").css("margin", "auto");
    } else if (w > 640) {
        document.getElementsByClassName("s1_left")[0].removeAttribute("style");
        document.getElementsByClassName("s1_right")[0].removeAttribute("style");
        document.getElementsByClassName("s1_phone")[0].style.color = "white";
        document.getElementsByClassName("s1_email")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_password")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_checkbox")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_signin")[0].style.display = "inline-block";
        $(".s1_signin").css("margin", "");
    }
    return;
}



// SECTION 2

// UNROLL CART
$(".s2_cart_top").click(function () {
    var x = document.getElementsByClassName("s2_cart_list")[0].classList.contains("show");
    if (x !== true) {
        document.getElementsByClassName("s2_cart_list")[0].classList.add("show");
    } else {
        document.getElementsByClassName("s2_cart_list")[0].classList.remove("show");
    }
});
$(document).mouseup(function (e) {
    var container1 = $('.s2_cart_top');
    var container2 = $('.s2_cart_list');
    if (!container1.is(e.target) && container1.has(e.target).length === 0 &&
        !container2.is(e.target) && container2.has(e.target).length === 0) {
        $(".s2_cart_list").removeClass("show");
    }
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
$(".s2_dropbtn_container").click(function () {
    var x = $(this).hasClass("show");
    if (x !== true) {
        $(this).siblings('.s2_dropdown_content').toggleClass("show");
        $(".s2_dropbtn_container").not(this).siblings('.s2_dropdown_content').removeClass("show");
    } else {
        $(this).siblings('.s2_dropdown_content').removeClass("show");
        $(".s2_dropbtn_container").not(this).siblings('.s2_dropdown_content').removeClass("show");
    }
});
$(document).mouseup(function (e) {
    var container1 = $('.s2_dropbtn_container');
    var container2 = $('.s2_dropdown_content');
    if (!container1.is(e.target) && container1.has(e.target).length === 0 &&
        !container2.is(e.target) && container2.has(e.target).length === 0) {
        $(".s2_dropdown_content").removeClass("show");
    }
});
window.addEventListener("resize", function () {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 880) {
        document.getElementsByClassName("s2_menu")[0].style.display = "none";
        document.getElementsByClassName("s2_menu_button")[0].style.display = "block";
        document.getElementsByClassName("section2")[0].style.height = "174px";
        $(".s2_menu").css("width", "100%");
        $(".s2_menu").css("line-height", "30px");
        $(".s2_dropdown").css("display", "block");
        $(".s2_dropdown").css("width", "100%");
        $(".s2_dropdown_content").css("text-align", "center");
        $(".s2_dropdown_content").css("padding-bottom", "5px");
        $(".s2_dropbtn_container").css("background-color", "#fafafa");
        $(".s2_dropbtn_container").hover(
            function () {
                $(this).css("background-color", "#f2f2f2");
            },
            function () {
                $(this).css("background-color", "#fafafa");
            }
        );
        $(".s2_logo_section").css("width", "100%");
        $(".s2_cart").css("width", "100%");
        $(".s2").css("padding-top", "0px");
    } else if (w > 880) {
        document.getElementsByClassName("s2_menu")[0].style.display = "block";
        document.getElementsByClassName("s2_menu_button")[0].style.display = "none";
        document.getElementsByClassName("section2")[0].style.height = "104px";
        document.getElementsByClassName("s2_dropdown")[0].style.display = "inline-block";
        $(".s2_dropdown").css("display", "inline-block");
        $(".s2_menu").css("line-height", "62px");
        $(".s2_dropdown_content").css("text-align", "left");
        $(".s2_dropdown_content").css("padding-bottom", "15px");
        $(".s2_dropbtn_container").css("background-color", "white");
        $(".s2_dropbtn_container").hover(
            function () {
                $(this).css("background-color", "");
            },
            function () {
                $(this).css("background-color", "");
            }
        );
        $(".s2_menu").css("width", "");
        $(".s2_dropdown").css("width", "");
        $(".s2_logo_section").css("width", "");
        $(".s2_cart").css("width", "");
        $(".s2").css("padding-top", "");
    }
});

function ResizeOnLoadSection2() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 880) {
        document.getElementsByClassName("s2_menu")[0].style.display = "none";
        document.getElementsByClassName("s2_menu_button")[0].style.display = "block";
        document.getElementsByClassName("section2")[0].style.height = "174px";
        $(".s2_menu").css("width", "100%");
        $(".s2_menu").css("line-height", "30px");
        $(".s2_dropdown").css("display", "block");
        $(".s2_dropdown").css("width", "100%");
        $(".s2_dropdown_content").css("text-align", "center");
        $(".s2_dropdown_content").css("padding-bottom", "5px");
        $(".s2_dropbtn_container").css("background-color", "#fafafa");
        $(".s2_dropbtn_container").hover(
            function () {
                $(this).css("background-color", "#f2f2f2");
            },
            function () {
                $(this).css("background-color", "#fafafa");
            }
        );
        $(".s2_logo_section").css("width", "100%");
        $(".s2_cart").css("width", "100%");
        $(".s2").css("padding-top", "0px");
    } else if (w > 880) {
        document.getElementsByClassName("s2_menu")[0].style.display = "block";
        document.getElementsByClassName("s2_menu_button")[0].style.display = "none";
        document.getElementsByClassName("section2")[0].style.height = "104px";
        document.getElementsByClassName("s2_dropdown")[0].style.display = "inline-block";
        $(".s2_dropdown").css("display", "inline-block");
        $(".s2_menu").css("line-height", "62px");
        $(".s2_dropdown_content").css("text-align", "left");
        $(".s2_dropdown_content").css("padding-bottom", "15px");
        $(".s2_dropbtn_container").css("background-color", "white");
        $(".s2_menu").css("width", "");
        $(".s2_dropdown").css("width", "");
        $(".s2_logo_section").css("width", "");
        $(".s2_cart").css("width", "");
        $(".s2").css("padding-top", "");
    }
    return;
}

$(".s2_menu_icon").click(function () {
    var x = $(".s2_menu").css("display");
    if (x === "none") {
        document.getElementsByClassName("s2_menu")[0].style.display = "block";
    } else {
        document.getElementsByClassName("s2_menu")[0].style.display = "none";
    }
});

$(document).mouseup(function (e) {
    var container1 = $('.s2_menu');
    var container2 = $('.s2_menu_icon');
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!container1.is(e.target) && container1.has(e.target).length === 0 &&
        !container2.is(e.target) && container2.has(e.target).length === 0 &&
        w <= 880) {
        document.getElementsByClassName("s2_menu")[0].style.display = "none";
    }
});


// SECTION 3 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function ChangeSlidesAuto() {
    setInterval(function () {
        plusSlides(1);
    }, 3000);
}



// SECTION 4
window.addEventListener("resize", function () {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        $(".s4_left_text").css("display", "none");
        $(".s4_left").css("width", "100%");
        $(".s4_right").css("width", "100%");
        $(".s4_right").css("margin-bottom", "14px");
    } else if (w > 640) {
        $(".s4_left_text").css("display", "inline-block");
        $(".s4_left").css("width", "");
        $(".s4_right").css("width", "");
        $(".s4_right").css("margin-bottom", "");
    }
});

function ResizeOnLoadSection4() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        $(".s4_left_text").css("display", "none");
        $(".s4_left").css("width", "100%");
        $(".s4_right").css("width", "100%");
        $(".s4_right").css("margin-bottom", "14px");

    } else if (w > 640) {
        $(".s4_left_text").css("display", "inline-block");
        $(".s4_left").css("width", "");
        $(".s4_right").css("width", "");
        $(".s4_right").css("margin-bottom", "");
    }
    return;
}

// SECTION 5

window.addEventListener("resize", function () {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 660) {

        $(".s5_left").css("width", "100%");
        $(".s5_right").css("width", "100%");
        $(".s5_right").css("margin-left", "0px");

    } else if (w > 660) {

        $(".s5_left").css("width", "");
        $(".s5_right").css("width", "");
        $(".s5_right").css("margin-left", "");
    }
});

function ResizeOnLoadSection5() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 660) {
        $(".s5_left").css("width", "100%");
        $(".s5_right").css("width", "100%");

    } else if (w > 660) {
        $(".s5_left").css("width", "");
        $(".s5_right").css("width", "");
    }
    return;
}

// SECTION 6 

var slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
    showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
    showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
    var i;
    var slides = document.getElementsByClassName("s6_mySlides");
    var dots = document.getElementsByClassName("s6_menu_item");
    if (n > slides.length) {
        slideIndex6 = 1;
    }
    if (n < 1) {
        slideIndex6 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex6 - 1].style.display = "block";
    dots[slideIndex6 - 1].className += " active";
    var activeSection = dots[slideIndex6 - 1].innerHTML;
    $(".s6_header_mobile_title").text(activeSection);
}

window.addEventListener("resize", function () {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        $(".s6_header_mobile").css("display", "block");
        $(".s6_menu").css("display", "none");
        $(".s6_header_right").css("display", "none");
        $(".s6_menu_item").css("display", "block");
        $(".s6_header_left").css("width", "100%");
        $(".s6_menu").css("margin-top", "10px");
        $(".s6_menu").css("margin-bottom", "10px");
        $(".s6_menu_item").css("line-height", "30px");

    } else if (w > 640) {
        $(".s6_header_mobile").css("display", "");
        $(".s6_menu").css("display", "");
        $(".s6_header_right").css("display", "");
        $(".s6_menu_item").css("display", "");
        $(".s6_header_left").css("width", "");
        $(".s6_menu").css("margin-top", "");
        $(".s6_menu").css("margin-bottom", "");
        $(".s6_menu_item").css("line-height", "");
    }
});

function ResizeOnLoadSection6() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        $(".s6_header_mobile").css("display", "block");
        $(".s6_menu").css("display", "none");
        $(".s6_header_right").css("display", "none");
        $(".s6_menu_item").css("display", "block");
        $(".s6_header_left").css("width", "100%");

        $(".s6_menu").css("margin-top", "10px");
        $(".s6_menu").css("margin-bottom", "10px");
        $(".s6_menu_item").css("line-height", "30px");
    } else if (w > 640) {
        $(".s6_header_mobile").css("display", "");
        $(".s6_menu").css("display", "");
        $(".s6_header_right").css("display", "");
        $(".s6_menu_item").css("display", "");
        $(".s6_header_left").css("width", "");

        $(".s6_menu").css("margin-top", "");
        $(".s6_menu").css("margin-bottom", "");
        $(".s6_menu_item").css("line-height", "");
    }
    return;
}

$(".s6_header_mobile_button").click(function () {
    var x = $(".s6_menu").css("display");
    if (x === "none") {
        document.getElementsByClassName("s6_menu")[0].style.display = "block";
    } else {
        document.getElementsByClassName("s6_menu")[0].style.display = "none";
    }
});

$(document).mouseup(function (e) {
    var container1 = $('.s6_menu');
    var container2 = $('.s6_header_mobile_button');
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!container1.is(e.target) && container1.has(e.target).length === 0 &&
        !container2.is(e.target) && container2.has(e.target).length === 0 &&
        w <= 640) {
        document.getElementsByClassName("s6_menu")[0].style.display = "none";
    }
});

window.addEventListener("resize", function () {
    var element = document.getElementsByClassName("s6_slides_container")[0];
    if (element.offsetHeight < element.scrollHeight) {
        $(".s6_slides_container").siblings('.s6_load_more_button_container').css("display", "block");

        $(".s6_slides_container").siblings('.s6_load_more_button_container').children(".load_more_button").css("display", "inline-block");

    } else {
        $(".s6_slides_container").siblings('.s6_load_more_button_container').css("display", "");
        $(".s6_slides_container").siblings('.s6_load_more_button_container').children(".load_more_button").css("display", "");
    }
});

function ResizeOnLoadSection61() {
    var element = document.getElementsByClassName("s6_slides_container")[0];
    if (element.offsetHeight < element.scrollHeight) {
        $(".s6_slides_container").siblings('.s6_load_more_button_container').css("display", "block");
        $(".s6_slides_container").siblings('.s6_load_more_button_container').children(".load_more_button").css("display", "inline-block");
    } else {
        $(".s6_slides_container").siblings('.s6_load_more_button_container').css("display", "");
        $(".s6_slides_container").siblings('.s6_load_more_button_container').children(".load_more_button").css("display", "");
    }
    return;
}

$(".s6_slides_container").siblings('.s6_load_more_button_container').children(".load_more_button").click(function () {
    $(".s6_slides_container").css("height", "auto");
    $(".s6_slides_container").siblings('.s6_load_more_button_container').css("display", "");
    $(".s6_slides_container").siblings('.s6_load_more_button_container').children(".load_more_button").css("display", "");
});

//SECTION 8

window.addEventListener("resize", function () {
    var element = document.getElementsByClassName("s8")[0];
    if (element.offsetHeight < element.scrollHeight) {

        $(".s8").siblings('.load_more_button').css("display", "inline-block");


    } else {
        $(".s8").siblings('.load_more_button').css("display", "");

    }
});

function ResizeOnLoadSection8() {
    var element = document.getElementsByClassName("s8")[0];
    if (element.offsetHeight < element.scrollHeight) {

        $(".s8").siblings('.load_more_button').css("display", "inline-block");
    } else {

        $(".s8").siblings('.load_more_button').css("display", "");
    }
    return;
}

$(".s8").siblings('.load_more_button').click(function () {
    $(".s8").css("height", "auto");
    $(".s8").siblings('.load_more_button').css("display", "");
});



//SECTION 13 
window.addEventListener("resize", function () {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        $(".s13_menu_icon").css("display", "block");
        $(".s13_menu").css("display", "none");
        $(".s13_menu").css("clear", "both");
        $(".s13_left").css("width", "100%");
        $(".s13_menu_item").css("display", "block");
        $(".s13_menu_item").css("margin-right", "0");
        $('.s13_menu_item').addClass('no_after');
        $(".s13_menu_item").hover(
            function () {
                $(this).css("background-color", "#0d0d0d");
            },
            function () {
                $(this).css("background-color", "black");
            }
        );

    } else if (w > 640) {
        $(".s13_menu_icon").css("display", "none");
        $(".s13_menu").css("display", "block");
        $(".s13_menu_item").css("display", "inline-block");
        $(".s13_menu").css("clear", "");
        $(".s13_left").css("width", "");
        $(".s13_menu_item").css("margin-right", "");
        $('.s13_menu_item').removeClass('no_after');
        $(".s13_menu_item").hover(
            function () {
                $(this).css("background-color", "");
            },
            function () {
                $(this).css("background-color", "");
            }
        );
    }
});

function ResizeOnLoadSection13() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        $(".s13_menu_icon").css("display", "block");
        $(".s13_menu").css("display", "none");
        $(".s13_menu").css("clear", "both");
        $(".s13_left").css("width", "100%");
        $(".s13_menu_item").css("display", "block");
        $(".s13_menu_item").css("margin-right", "0");
        $('.s13_menu_item').addClass('no_after');
        $(".s13_menu_item").hover(
            function () {
                $(this).css("background-color", "#0d0d0d");
            },
            function () {
                $(this).css("background-color", "black");
            }
        );
    } else if (w > 640) {
        $(".s13_menu_icon").css("display", "none");
        $(".s13_menu").css("display", "block");
        $(".s13_menu_item").css("display", "inline-block");
        $(".s13_menu").css("clear", "");
        $(".s13_left").css("width", "");
        $(".s13_menu_item").css("margin-right", "");
        $('.s13_menu_item').removeClass('no_after');
        $(".s13_menu_item").hover(
            function () {
                $(this).css("background-color", "");
            },
            function () {
                $(this).css("background-color", "");
            }
        );
    }
    return;
}

$(".s13_menu_icon").click(function () {
    var x = $(".s13_menu").css("display");
    if (x === "none") {
        document.getElementsByClassName("s13_menu")[0].style.display = "block";
    } else {
        document.getElementsByClassName("s13_menu")[0].style.display = "none";
    }
});

$(document).mouseup(function (e) {
    var container1 = $('.s13_menu');
    var container2 = $('.s13_menu_icon');
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!container1.is(e.target) && container1.has(e.target).length === 0 &&
        !container2.is(e.target) && container2.has(e.target).length === 0 &&
        w <= 640) {
        document.getElementsByClassName("s13_menu")[0].style.display = "none";
    }
});