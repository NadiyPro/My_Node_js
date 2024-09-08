const rand = require('./random_int');
const  randArr = require('./random_array');

module.exports = {
    "randomInt" : rand, // де "randomInt" - це ключ під яким його видно зовнішнім програмам / папкам
    "randomArr": randArr
}