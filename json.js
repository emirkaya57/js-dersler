let sampleJson = `[
    {
        "name" : "Emir",
        "surname" : "Kaya"
    },
    {
        "name" : "Erdo",
        "surname" : "Yeşil"
    },
    {
        "name" : "Yunus",
        "surname" : "Söğüt"
    }
]`;
let users = JSON.parse(sampleJson, (key, value) => {
    return key === "name" ? value.toUpperCase() : value
})
/* console.log(users); */

let category = [
    {
        name: "html",
        count: 10
    },
    {
        name: "css",
        count: 5
    },
    {
        name: "js",
        count: 20
    },
];
//replacer : json da hangi parametreyi istiyorsak onu belirtiyoruz
let categories = JSON.stringify(category, ['name',], 3);
console.log(categories);