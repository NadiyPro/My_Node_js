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
// розрахунок розміру файла
function f03(){
    const pathToFile = './test/info.dat';
    const fileInfo = fs.statSync(pathToFile);
    console.log(fileInfo)
}
f03();
// Ім'я та розширення файлу
function f04(){
    const pathToFile = './test/info.dat';
    console.log(path.basename(pathToFile));
    console.log(path.dirname(pathToFile));
    console.log(path.extname(pathToFile));
    console.log(path.parse(pathToFile));
}
f04();
// отримуємо файли та папки вкладені в одну директорію
function f05(){
    const pathToDir = './test';
    const allFiles = fs.readdirSync(pathToDir);
    console.log(allFiles)
}
f05();
function f050(){
    const pathToDir = '.';
    const allFiles = fs.readdirSync(pathToDir);
    console.log(allFiles)
    let out = '';
    allFiles.forEach(item => out += item +'\n');
    console.log(out);
}
f050();
// отримати абсолютний шлях
const directoryPath = path.join(__dirname,'test');
console.log(directoryPath);
