//regex
//1- regexp constructor
// \b : kelime sınırlayıcıyı koymamız gerekiyor koymazsak bütün kelimeleri istediğimiz sayıya böler

/* let pattern = 'love';
let flag = 'gi';
let regex = new RegExp(pattern, flag);
let regexp = /love/;

let word = /salak/i;
let comment = prompt();
if (word.test(comment)) {
    alert('sdasd')

} */

//match : true false
let str = 'i loVe js and i love sinop';
//console.log(str.match(/love/ig));


//search : indexini döndürür

//console.log(str.search(/love/gi));

//replace
/*
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/python/gi, 'JavaScript')
console.log(matchReplaced); */

//sayı alma
/* let string = 'ben 20 yaşındayım ve 2002 yılında doğdum';

console.log(string.match(/\b\d{2,4}\b/g)); */

/* let pattern = /[Aa]pple | [Bb]anana/g
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.';
//console.log(txt.match(pattern));
console.log(txt.match(/^[A-Z][a-z]{2,8}/)); */

/* //a-z    DEN SONRA 3 KARAKTER MİNİMUM
let pattern = /^[A-Z][a-z]{3,12}$/;
let names = 'Asabeneh';
console.log(pattern.test(names));
 */

/* function is_valid_variable(str) {
    console.log(
        /^[a-z_.]+$/i.test(str)
    );
}

is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') //true
is_valid_variable('first.name')  // True */

//regexp groups
let date = '2023-12-08';
let match = date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)
console.log(
    match.groups
);