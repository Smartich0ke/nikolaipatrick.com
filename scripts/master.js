
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function copyDiscord() {
  var discordTag = "Artichoke#4180";
  navigator.clipboard.writeText(discordTag);
  //alert("Copied the text: " + discordTag);
  document.getElementById("tag").innerHTML = "Copied!";
}
function openMenu() {
  const collection = document.getElementsByClassName("dropbtn");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.transition = "transform .3s ease-in-out";
    collection[i].style.transform = "rotate(3deg)";
  }
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
        //document.getElementById("dropbtn").style.height = "128px";
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        const collection = document.getElementsByClassName("dropbtn");
        for (let i = 0; i < collection.length; i++) {
          collection[i].style.transition = "transform .3s ease-in-out";
          collection[i].style.transform = "rotate(-90deg)";
        }
        openDropdown.classList.remove('show');
      }
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function updateEditTime() {
  var lastUpdatedText = "6 May 2022";
  //document.getElementById("lastUpdated").innerHTML = "Copied!";
  const collection = document.getElementsByClassName("lastUpdated");
  for (let i = 0; i < collection.length; i++) {
    collection[i].innerHTML = lastUpdatedText;
  }
}
function dynamicFooterPadding() {
  var footerHeight = document.querySelector('.footer');
  var height = footerHeight.offsetHeight;
  const bodyPadding = document.getElementsByClassName("bodyContent");
  for (let i = 0; i < bodyPadding.length; i++) {
    bodyPadding[i].style.paddingBottom = height + "px";
  }
}
function onLoadFunctions() {
  updateEditTime();
  dynamicFooterPadding();
}
function discordAlert() {
  alert("discord tag: artichoke#4180");
}
