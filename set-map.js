const names = new Set(['ahmet', 'mehmet', 'veli']);
/* console.log(names); */

let languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

/* const setOfLang = new Set(languages);
setOfLang.add('turkish')
setOfLang.delete('English');
 console.log(setOfLang.size); //lenghti verir
//console.log(setOfLang.has('turkish'));//olup olamadığını kontrol eder
// console.log(setOfLang) //seti komple temizler
for (const set of setOfLang) {
    console.log(set);
}
 */



/* const langSet = new Set(languages);
console.log(langSet);
console.log(langSet.size);
const counts = [];
for (const l of langSet) {

    const filter = languages.filter((lng) => lng == l);
    console.log(filter);
    counts.push({
        language: l, counts: filter.length
    })
}
console.log(counts); */

//MAP https://javascript.info/map-set


const emir = {
    name: 'emir',
    surname: 'kaya'
}
const kaya = {
    name: 'kaya'
}
const map = new Map()
map.set(emir, 10).set(kaya, 10);
console.log(/* map.get(emir) */
    map.keys(emir)
);
/* [...map.values()].forEach(e => {
    console.log(e);
});
[...map()].forEach((k, v) => {
    console.log(k, v);
});
for (let u of map.keys()) {
    console.log(u);
} */

const map2 = new Map(Object.entries(emir));
console.log(Object.fromEntries(map2.entries()));


