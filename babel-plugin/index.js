const babel = require('babel-core');

const code = 'console.log(111); const x=1; alert(x);';

/*
let result = babel.transform(code, {
    plugins: [
        require("./babel-test")
    ]
}).code;
console.log('transform end ' + result);
*/

// 文件转码
let file = 'babel-plugin/entry.js'; // 根目录下的文件
let result = babel.transformFile(file, {
    plugins: [
        require("./babel-test")
    ]
}, function (err, result) {
    console.log('transformFile end ' + result.code);
});


// const result1 = babel.transformFileSync('entry.js', {
//     plugins: [
//         require("./babel-test")
//     ]
// }).code;
// console.log('transformFileSync end ' + result1);