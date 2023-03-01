//consola basma
/* console.log('30 days of javascript');
console.log('%cDur!', 'font-size:50px ; color:red ; font-family:arial'); */

//uyarı verme
/* console.warn('uyari mesaji'); */

//hata varsa
/* console.error('error') */

//consol da tablo gibi gösterme
/* console.table({
    name: 'emir',
    surname: 'kaya',
    age: 20
}) */

//bir işlem ne kadar sürdü
/* console.time('calculate 1m index');
new Array(10e5).fill().map((val, key) => key);
console.timeEnd('calculate 1m index') */


//consola bilgi basma
/* console.info('adasdsasdasd'); */

// iddia yanlışsa konsola bir hata mesajı yazar
/* console.assert(5 < 3, 'yanlış'); */

//farklı günlük gruplarının gruplanmasına yardımcı olabilir

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
/* 
console.group('Names');
console.log(names);
console.groupEnd();

console.group('Countries');
console.log(countries);
console.groupEnd();
console.group('users');
console.log(users);
console.groupEnd() */

function end() {
    console.count('çağrıldı')
}

end();
end();
end();
end();
end();
end();
end();
end();

//console temizleme
console.clear();
/*
console.time();
for (let index = 0; index < 15; index++) {
    console.log(index);

}
console.timeEnd() */
