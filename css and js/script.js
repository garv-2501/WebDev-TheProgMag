//NAVIGATION BAR TOGGLE BUTTON
//Creating a navigation toggle button for
//a responsive website
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navigation-bar-links")[0];

//Reveal navigation by clicking the toggle button
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//------------------------------

//NEWSLETTER SUBSCRIPTION POP-UP
//Inspired by coding snow
const popup_screen = document.querySelector(".popup-screen");
const popup_box = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
  setTimeout(() => {
    popup_screen.classList.add("active");
  }, 2000); //Popup in 2 sec.
});

closeBtn.addEventListener("click", () => {
  popup_screen.classList.remove("active"); //Close popup screen on clicking the close button.
  //Cookie expire in a day:
  document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60;
});

//Use created cookie to hide/show popup screen.
const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

if (WebsiteCookie != -1) {
  popup_screen.style.display = "none"; //Hide popup screen
} else {
  popup_screen.style.display = "flex"; //Show popup screen
}

//--------------------------------

//BACK TO TOP ICON CODE
jQuery("#backtotop").click(function () {
  //This scrolls to top after clicking the button
  jQuery("body,html").animate(
    {
      scrollTop: 0,
    },
    200
  );
});

jQuery(window).scroll(function () {
  //Only makes scroll button visible after some scrolling
  if (jQuery(window).scrollTop() > 150) {
    jQuery("#backtotop").addClass("visible");
  } else {
    jQuery("#backtotop").removeClass("visible");
  }
});
