class Person {
    constructor(isim, soy, age, country, city, job) {
        this.isim = isim;
        this.soy = soy;
        this.age = age;
        this.country = country;
        this.city = city;
        this.job = job;
        this.skills = [];
    }
    getFullName() {
        const fullName = this.isim + ' ' + this.soy
        return fullName
    }
    append(skill) {
        this.skills.push(skill);
    }
    get getSkills() {
        return this.skills
    }

    set setSkills(skill) {
        this.skills.push(skill);
    }
}

let person = new Person('Emir', 'Kaya', 20, 'Turkey', 'İstanbul', 'Developer');
let person2 = new Person('Can', 'Kümet', 20, 'Turkey', 'İstanbul', 'jr.Developer')
person.setSkills = 'javascript';
person.append('html');
/* console.log(person.getSkills,
    person2.getFullName()); */

//İNHERİTANCE : tek klastan ortak olanları yürütme
class Teacher extends Person {
    constructor(isim, soy, age, country, city, job, gender) {
        super(isim, soy, age, country, city, job)
        this.gender = gender;
    }
    get getGender() {
        return this.gender === 1 ? 'Erkek' : 'Kadın';
    }
    getFullName() {
        return super.getFullName() + ' ' + '(' + this.getGender + ')';
    }

    teach() {
        return 'öğretiyor...'
    }

}

class Student extends Person {
    constructor(isim, soy, age, country, city, job, gender) {
        super(isim, soy, age, country, city, job)
        this.gender = gender;
    }
    learn() {
        return 'Öğreniyor...'
    }
    get getGender() {
        return this.gender === 1 ? 'Erkek' : 'Kadın';
    }
    getFullName() {
        return super.getFullName() + ' ' + '(' + this.getGender + ')';
    }
}

let teacher = new Teacher('Serdar', 'Ekinci', 20, 'Turkey', 'Yozgat', 'Bankaci', 1);
let student = new Student('furkan', 'tevge', 20, 'turkey', 'rize', 'makine', 2);
console.log(teacher.getFullName());
console.log(student.getFullName());

