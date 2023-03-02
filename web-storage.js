
let names = ['emir', 'emre', 'erdo'];
const name = { name: 'hasan', surname: 'şaşar' };
localStorage.setItem('names', JSON.stringify(names));
localStorage.setItem('user', JSON.stringify(name))
console.log(localStorage);
console.log(localStorage.getItem('name'));
