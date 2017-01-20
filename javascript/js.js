/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function ShowCurrencyList() {
    document.getElementsByClassName("s1_dropdown_content_currency")[0].classList.toggle("show");
    $(".s1_dropdown_content_user").removeClass("show");
    $(".s1_dropdown_content_search").removeClass("show");
}

function ShowLoginForm() {
    document.getElementsByClassName("s1_dropdown_content_user")[0].classList.toggle("show");
    $(".s1_dropdown_content_currency").removeClass("show");
    $(".s1_dropdown_content_search").removeClass("show");
}

function ShowSearchForm() {
    document.getElementsByClassName("s1_dropdown_content_search")[0].classList.toggle("show");
    $(".s1_dropdown_content_currency").removeClass("show");
    $(".s1_dropdown_content_user").removeClass("show");
}

$(document).mouseup(function (e) {
    var container1 = $('.s1_dropdown_content_currency');
    var container2 = $('.s1_dropdown_content_user');
    var container3 = $('.s1_dropdown_content_search');
    if (!container1.is(e.target) && container1.has(e.target).length === 0 &&
        !container2.is(e.target) && container2.has(e.target).length === 0 &&
        !container3.is(e.target) && container3.has(e.target).length === 0) {
        $(".s1_dropdown_content_currency").removeClass("show");
        $(".s1_dropdown_content_search").removeClass("show");
        $(".s1_dropdown_content_user").removeClass("show");
    }
});

// SET CURRENCY VALUE 
$(".s1_currency_value").click(function () {
    $(".s1_dropdown_content_currency").removeClass("show");
    var currencyValue = $(this).text();
    $(".s1_current_currency").text(currencyValue);
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
        document.getElementsByClassName("s1_left")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_left")[0].style.width = "100%";
        document.getElementsByClassName("s1_right")[0].style.width = "100%";
        document.getElementsByClassName("s1_left")[0].style.backgroundColor = "white";
        document.getElementsByClassName("s1_phone")[0].style.color = "#838383";
        document.getElementsByClassName("s1_email")[0].style.display = "block";
        document.getElementsByClassName("s1_password")[0].style.display = "block";
        document.getElementsByClassName("s1_checkbox")[0].style.display = "block";
        document.getElementsByClassName("s1_signin")[0].style.display = "block";
        document.getElementsByClassName("s1_signin")[0].style.margin = "auto";

    } else if (w > 640) {
        document.getElementsByClassName("s1_left")[0].removeAttribute("style");
        document.getElementsByClassName("s1_right")[0].removeAttribute("style");
        document.getElementsByClassName("s1_phone")[0].style.color = "white";
        document.getElementsByClassName("s1_email")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_password")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_checkbox")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_signin")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_signin")[0].removeProperty("margin");
    }
});

//CHECK WIDTH ON LOAD AND CHANGE MENU APPEARANCE IF WINDOW IS SMALL
window.onload = function () {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w <= 640) {
        document.getElementsByClassName("s1_left")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_left")[0].style.width = "100%";
        document.getElementsByClassName("s1_right")[0].style.width = "100%";
        document.getElementsByClassName("s1_left")[0].style.backgroundColor = "white";
        document.getElementsByClassName("s1_phone")[0].style.color = "#838383";
        document.getElementsByClassName("s1_email")[0].style.display = "block";
        document.getElementsByClassName("s1_password")[0].style.display = "block";
        document.getElementsByClassName("s1_checkbox")[0].style.display = "block";
        document.getElementsByClassName("s1_signin")[0].style.display = "block";
        document.getElementsByClassName("s1_signin")[0].style.margin = "auto";
    } else if (w > 640) {
        document.getElementsByClassName("s1_left")[0].removeAttribute("style");
        document.getElementsByClassName("s1_right")[0].removeAttribute("style");
        document.getElementsByClassName("s1_phone")[0].style.color = "white";
        document.getElementsByClassName("s1_email")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_password")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_checkbox")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_signin")[0].style.display = "inline-block";
        document.getElementsByClassName("s1_signin")[0].removeProperty("margin");
    }
    return;
};