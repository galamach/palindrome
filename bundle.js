(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"galamach-palindrome-section9":2}],2:[function(require,module,exports){
/// Reverses a string.
// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds `blank` to all strings.
String.prototype.blank = function() {
  return this.match(/^$/);
}

// Adds `last` to all arrays.
Array.prototype.last = function() {
  return this.slice(-1);
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    //return this.processor(this.content);
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    //return this.content;    // stub return value
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    //return this.processedContent() === reverse(this.processedContent());
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
        return false;
    }
  }

  // Returns whether content is an empty string or not.
  this.emptiness = function emptiness() {
    return !!this.content.blank();
  }

  // Returns last character of content.
  this.butNotLeast = function butNotLeast() {
    Array.from(this.content).last();
  }
}

// Defines a translated Phrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
