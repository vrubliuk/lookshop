/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function ShowCurrencyList() {
    document.getElementsByClassName("s1_dropdown_content_currency")[0].classList.toggle("show");
}

function ShowLoginForm() {
    document.getElementsByClassName("s1_dropdown_content_user")[0].classList.toggle("show");
}

function ShowSearchForm() {
    document.getElementsByClassName("s1_dropdown_content_search")[0].classList.toggle("show");
}

//HIDE MENU IF WINDOW IS SMALL
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



//CHECK WIDTH ON LOAD
// window.onload = function () {
//   var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//   if (w <= 820) {
//     document.getElementsByClassName("menuItem")[0].style.display = "none";
//     document.getElementsByClassName("menuItem")[1].style.display = "none";
//     document.getElementsByClassName("menuItem")[2].style.display = "none";
//     document.getElementsByClassName("menuItem")[3].style.display = "none";
//     document.getElementsByClassName("menuItem")[4].style.display = "none";
//     document.getElementsByClassName("menuItem")[5].style.marginRight = "20px";
//     document.getElementById("logo").style.left = "0";
//     document.getElementById("logo").style.right = "0";
//     document.getElementById("menuIcon").style.display = "block";
//   } else if (w > 820) {
//     document.getElementsByClassName("menuItem")[0].removeAttribute("style");
//     document.getElementsByClassName("menuItem")[1].removeAttribute("style");
//     document.getElementsByClassName("menuItem")[2].removeAttribute("style");
//     document.getElementsByClassName("menuItem")[3].removeAttribute("style");
//     document.getElementsByClassName("menuItem")[4].removeAttribute("style");
//     document.getElementsByClassName("menuItem")[5].style.marginRight = "50px";
//   }
//   return;
// };