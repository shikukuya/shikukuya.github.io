function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}

function selectLanguage() {
  window.location.href = "//shikukuya.github.io/language";
}

function checkLanguage() {
  console.log("Checking language...");
  var lang = getCookie("lang");
  console.log("Cookie: " + lang);
  if (lang == null) {
    console.log("Not selected a language yet");
    selectLanguage();
  } else if (lang == "zh-cn") {
    console.log("Redircting to zh-cn...");
    window.location.href = "//shikukuya.github.io/zh-cn";
  } else {
    console.log("Redircting to en-us...");
    window.location.href = "//shikukuya.github.io/en-us";
  }
}

function language(lang) {
  var d = new Date();
  d.setTime(d.getTime() + (1000 * 1000 * 1000 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "lang=" + lang + "; " + expires;
  window.location.href = "//shikukuya.github.io/" + lang;
}

function checkMobile() {
  let width = screen.width
  console.log("Checking mobile...");
  console.log("Screen width: " + width);
  if (width <= 960) {
    console.log("Screen width <= 960");
    console.log("Switching to mobile mode...");
    document.getElementById("main").setAttribute("class", "mobile");
  } else {
    console.log("Screen width > 960");
    console.log("Switching to PC mode...");
  }
}

console.log("Loading page...");