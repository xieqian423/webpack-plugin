var babel = require('babel-core');
var t = require('babel-types');

const visitor = {
    Identifier (path) {
        // console.log('Identifier ' + path.node.name);
        if (path.node.name === 'console') {
            console.log('---console ' + path.node.name);
        }
    },
    BinaryExpression (path) {
        const node = path.node;
        console.log('--- BinaryExpression ' + node);
    },
    CallExpression (path, state) {
        // 删除所有的console和alert
        let node;
        
        if (path.get('callee').isMemberExpression()) {
            if (path.get('callee').get('object').isIdentifier()) {
                node = path.get('callee').get('object').get('name').node;
                if ( node === 'console') {
                    path.remove();
                }
            } 
        } else if (path.get('callee').isIdentifier()) {
            node = path.get('callee').get('name').node;
            if ( node === 'alert') {
                path.remove();
            }
        }
    }
}

module.exports = function (babel) {
    return {
        visitor
    }
}