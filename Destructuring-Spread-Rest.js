
//Destructuring => şeklini bozma
//Spread: kopyalama Rest: geriye kalan tüm değişkenleri toplar
//https://www.hakanbaykara.com/blog/javascriptte-rest-ve-spread-operatorleri-kullanimi-ve-farklari/

const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers
//console.log(numOne, numTwo, numThree);
const fullstack = [['html', 'css', 'js', 'vue'], ['php', 'angaryos', 'mondodb']]
let [frontend, backend] = fullstack;
//console.log(frontend);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [num1, num2, num3, ...other] = array;
//console.log(num1, num2, num3);
//console.log(other);

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country, capital] of countries) {
    //console.log(`Ülke:${country} - Başkent:${capital}`);
}

let arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
let uniq = [...new Set(arr)];
//console.log(uniq);


//rest 
let { x, y, ...z } = { x: 1, y: 4, a: 5, b: 3 };
/* console.log(x); //1
console.log(y); //4
console.log(z) */ // {a:5,b:3}


//spread 
let n = { x, y, ...z };
console.log(n);