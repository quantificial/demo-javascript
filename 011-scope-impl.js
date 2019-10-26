
// normal

var hello = {
    us: 'hello ',
    cn: '你好 '
  };
function greetWithEnglish(name) {
console.log(getGreetingWords(name, 'us'));
}
function greetWithChinese(name) {
console.log(getGreetingWords(name, 'cn'));
}
function getGreetingWords(name, language) {
return hello[language] + name;
}
greetWithEnglish('henry');			// hello henry
greetWithChinese('henry');			// 你好 henry
hello.us = 'goodbye ';
greetWithEnglish('henry');			// goodbye henry



// use module

function GreetBot() {
    var hello = {
          us: 'hello ',
          cn: '你好 '
        },
        interface = {
          greetWithEnglish: greetWithEnglish,
          greetWithChinese: greetWithChinese
        };
    function greetWithEnglish(name) {
      console.log(getGreetingWords(name, 'us'));
    }
    function greetWithChinese(name) {
      console.log(getGreetingWords(name, 'cn'));
    }
    function getGreetingWords(name, language) {
      return hello[language] + name;
    }
  
    return interface;
  }
  var greetBot1 = GreetBot();
  greetBot1.greetWithEnglish('henry');			// hello henry
  greetBot1.greetWithChinese('henry');			// 你好 henry
  var greetBot2 = GreetBot();
  greetBot2.greetWithEnglish('peter');			// hello peter
  greetBot2.greetWithChinese('peter');			// 你好 peter


  // IIFE implmentation

  var greetBot = (function() {
    var hello = {
          us: 'hello ',
          cn: '你好 '
        },
        interface = {
          greetWithEnglish: greetWithEnglish,
          greetWithChinese: greetWithChinese
        };
    function greetWithEnglish(name) {
      console.log(getGreetingWords(name, 'us'));
    }
    function greetWithChinese(name) {
      console.log(getGreetingWords(name, 'cn'));
    }
    function getGreetingWords(name, language) {
      return hello[language] + name;
    }
  
    return interface;
  })();
  greetBot.greetWithEnglish('henry');			// hello henry
  greetBot.greetWithChinese('henry');			// 你好 henry

  