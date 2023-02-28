//window scope
/* a = 'emir';
b = 10;

function scope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}
console.log(a, b);
 */
//global scope
let a = 'emir';
let b = 'kaya';
function letLearnScope() {
    console.log(a, b);

    if (true) {
        let a = 'erdo';
        let b = 'yeşil';
        console.log(a, b);
    }
    console.log(a, b);
}
letLearnScope();
console.log(a, b);


//object
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
    firstName: 'Emir',
    lastName: 'Kaya',
    age: 250,
    country: 'turkey',
    city: 'istanbul',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Dart',
        'C',
        'PHP'
    ],
    isMarried: false,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
person.title = 'developer';
person.getPersonInfo = function () {
    let skillsWithoutLastOne = this.skills.splice(0, this.skills.length - 1).join(', ');
    console.log(skillsWithoutLastOne);
    let lastSKills = this.skills.at(-1);
    let skills = `${skillsWithoutLastOne} and ${lastSKills}`;
    let getFullName = this.getFullName();
    let statement = `${getFullName} is a ${this.title} in living ${this.country}`;
    return statement

}
console.log(person.getPersonInfo())

//object methods
/* const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson) */

/* console.log(Object.keys(person));
console.log(Object.values(person));


for (let [key, val] of Object.entries(person)) {
    console.log(key, val);
} */

console.log(person.hasOwnProperty('firstName')); //olup olmadığını kontrol etmek için kullanılır
//oluşturduğumuz objeyi değiştirmek istmiyorsak Object.freeze kullanırsak dondurmuş oluruz.
