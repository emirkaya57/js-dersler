
//high order function

const func = (n) => {
    return n ** 2;
}

function cube(cb, number) {
    return cb(number) * number;
}

/* console.log(cube(func, 3)); */





//fonksiyonu geriye döndürmek

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3;
        }
        return c
    }
    return b
}

/* console.log(a(4)(7)(10)); */

let arr = [1, 3, 5, 7, 9];
let total = 0;
arr.forEach(arr => total += arr);
/* console.log(total); */
//zaman ayarları(setting time)
//setInterval : belli aralıklarla çalıştırır.her 5 sn de çalıştırır örnek
//setTimeout : bir şeyi belli bir zaman sonra çalıltırmak için kullanılır.

function hello() {
    console.log('hello');
}
/* const interval = setInterval(hello, 1000); */
/* const timeout = setTimeout(hello, 1000) */
// setInterval'i temizlemek için clearInterval kullanıyoruz.
//setTimeout'u temizlemek için clearTimeout kullanıyoruz.

/* setTimeout(() => {
    clearInterval(interval);
    console.log('interval iptal edildi');
}, 5000); */
/* setTimeout(() => {
    clearTimeout(timeout);
    console.log('timeout iptal edildi');
}, 2000); */





//map methodu: dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır.
let user = [
    {
        id: 1,
        name: 'emir',
        age: 20
    },
    {
        id: 2,
        name: 'hakan',
        age: 29
    },
    {
        id: 3,
        name: 'erdo',
        age: 31
    }
]

user = user.map(user => {
    if (user.id == 2) {
        user.name = 'mustafa'
    }
    return user
});
/* console.log(user); */

let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
let uppercase = names.map((name) => name.toUpperCase());
/* console.log(uppercase); */

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Japan',
    'Kenya',
    'Denmark',
    'Ireland'
]

let upper = countries.map(country => {
    return country.toUpperCase()
});
/* console.log(upper); */


//filter methodu
let sayi = [1, 3, 5, 7, 9];

/* console.log(sayi.filter(number => number >= 5 && number < 9)); */

let user2 = [

    {
        id: 3,
        name: 'sıla',
        age: 31,
        gender: 2
    },
    {
        id: 1,
        name: 'emir',
        age: 20,
        gender: 1
    },
    {
        id: 2,
        name: 'hakan',
        age: 29,
        gender: 1
    }

]

let woman = user2.filter(user => user.gender == 2);
let man = user2.filter(user => user.gender == 1);
/* console.log(woman, man); */



//reduce methodu: dizi değerlerini yalnızca bir değere indirger
let sayi2 = [1, 3, 5, 7, 9];
/* console.log(sayi.reduce((oldValue, currentValue) => oldValue + currentValue, 0)); */

//every methodu:Dizideki tüm öğelerin belirtilen koşula uygun olup olmadığını test eder
/* console.log(user2.every(user => user.gender == 1)); */ //false

//some methodu : Dizideki herhangi birinin belirtilen koşula uygun olup olmadığını test eder
/* console.log(user2.some(user => user.gender == 1)); */ //true

//find methodu : koşula uyan ilk elemanı getirir
/* console.log(sayi2.find(number => number > 3)); */
/* console.log(user2.find(user => user.id == 3)); */


//findIndex : elemanın kaçıncı indexte olduğunu belirtir
/* console.log(user2.findIndex(user => user.id == 3)) */


//sort methodu : sıralamak için kullanılır
/* console.log(countries.sort()); */
/* console.log(sayi2.sort((a, b) => b - a)); */
/* console.log(user2.sort((a, b) => a.id - b.id)); */



// stringleri a'dan z'ye sıralamak için localCompare' de kullanılabilir
/* user2.sort((a, b) => a.name.localeCompare(b.name));
console.log(user2); */