const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

var words = ["< Welcome >", "< to >", "< my > ", "< Website >"];
const typingDelay = 100;
const erasingDelay = 50;
const nextDelay = 500;
var index = 0;
var charIndex = 0;

function type() {
  if (charIndex < words[index].length) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursor.classList.remove("typing");
  	setTimeout(erase, nextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent = words[index].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursor.classList.remove("typing");
    index++;
    if(index>=words.length) index=0;
    setTimeout(type, typingDelay + 200);
  }
}

function Toggle() {
  var ele = document.getElementById("menu");
  ele.classList.toggle("menu-active");
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(words.length) setTimeout(type, nextDelay + 250);
});