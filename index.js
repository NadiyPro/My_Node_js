//підключаємо модулі для роботи з фс
const fs = require('fs');
// const path = require('path');

// перевіряємо наявність теки
function f01(){
    const pathToDir = './test1';
    if(fs.existsSync(pathToDir)){
        console.log('yes')
    }
    else {
        console.log('no');
    }
}
f01();