var babel = require('babel-core');
var t = require('babel-types');

const visitor = {
    Identifier (path) {
        console.log(path.node.name);
    }
}

const result = babel.transform(code, {
    
})