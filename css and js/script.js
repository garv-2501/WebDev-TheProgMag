//NAVIGATION BAR TOGGLE BUTTON
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navigation-bar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//NEWSLETTER POP-UP
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
