// пример подключения именнованого модуля
const m1 = require('./example_module');
console.log(m1.randomInt());
//или через деструктуризацию
const {randomInt} = require('./example_module');
console.log(randomInt());