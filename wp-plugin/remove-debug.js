
class RemoveDebug {
    constructor (options) {
        this.options = options;
    }
    apply (compiler) {
        // compiler.hooks.done.tap('RemoveDebug', () => {
        //     console.log('remove debug-----');
        //     console.log(this.options);
        // })
        compiler.plugin('complie', function (params) {
            console.log('The compiler is starting to compile...');
            debugger
        })
    }
}

module.exports = RemoveDebug;
