let Phrase = require("galamach-palindrome-section9");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome!`;
  }
}
document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  //button.addEventListener("click", palindromeTester());
  button.addEventListener("submit", function() {
    palindromeTester(event);
  });
});
