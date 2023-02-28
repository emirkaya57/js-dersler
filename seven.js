//fonksiyonlar
/* function multi(num1, num2) {
    return num1 * num2;
}
let num1 = 5;
let num2 = 2;
multi(num1, num2);

function array(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum
}

let dizi = [1, 2, 3, 4, 5, 10];
console.log('toplam', array(dizi)); */

/* function topla() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index]

    }
    return sum
}


console.log('toplam', topla(1, 2, 3, 4, 5, 6, 10)); */
//kendi kendine çağıran fonksiyon
/* (function name(num1) {
    console.log(num1 * num1);
})(10); */
/* let hello = (function name(name) {
    console.log(`İsim : ${name}`);
})('Emir'); */

//Arrow Fonksiyon
/* let name = () => {

} */
/* let hello2 = (name, surname) => `hello ${name} ${surname}`
console.log(hello2('ahmet', 'kılıç')); */
/* const topla = (...numbers) => {
    console.log(numbers);
}
topla(2, 5, 6) */

/* const changeArr = arr => {
    let newArr = [];
    for (const iterator of arr) {
        newArr.push(iterator.toUpperCase())
        console.log(iterator);
    }
    return newArr;
}

const countries = ['turkey', 'abd', 'russia'];
console.log(changeArr(countries)); */