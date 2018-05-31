`$ npm install --global palindrome
$ vim test.js
let Phrase = require("palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true`
