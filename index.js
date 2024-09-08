//підключаємо модулі для роботи з фс
const fs = require('fs');
const path = require('path');

// перевіряємо наявність теки
function f01(){
    const pathToDir = './test';
    if(fs.existsSync(pathToDir)){
        console.log('yes')
    }
    else {
        console.log('no');
    }
}
f01();
// перевірка існування файлу
function f02(){
    const pathToFile = './test/info.dat';
    if(fs.existsSync(pathToFile)){
        console.log('yes')
    }
    else {
        console.log('no');
    }
}
f02();