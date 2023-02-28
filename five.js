//ayların kaç çketiğini gösterir
/* let month = prompt('istediğiniz ayı sayı olarak giriniz', '')

if (month <= 12) {

    function sayi(month) {
        let year = new Date().getFullYear();
        return new Date(year, month + 1, 0).getDate();

    }
    alert(sayi(month))
} else alert("12 ve 12'den küçük sayı girini") */

/* function daysInMonth(month) {
    var year = new Date().getFullYear();
    return new Date(year, month, 0).getDate();
}
alert(daysInMonth(7));
alert(daysInMonth(2)); */


// egzersizler

// let array = [];
// let array2 = [1, 2, 3, 4, 5]
// console.log(array2.length);
// console.log(array2[0]);
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies.length);
let last = itCompanies[itCompanies.length - 1];
console.log(itCompanies[0]);
console.log(last);
console.log(itCompanies.toString());
console.log(itCompanies.includes('Apple'));
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(3, 6));
console.log(itCompanies.splice(3, 4));
itCompanies.pop();
console.log(itCompanies);






