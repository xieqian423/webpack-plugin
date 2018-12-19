/**
 * Created by Administrator on 2018/12/19.
 */
function RemoveDebug(options) {
    this.options = options;
};
RemoveDebug.prototype.apply = function(compiler) {
    //我们主要关注 compilation 阶段，即 webpack 打包阶段
    const t = this;
    compiler.plugin('compilation', function(compilation , callback) {
        console.log("This is an example plugin!!!");
        console.log(t.options.name);
        //当该插件功能完成以后一定要注意回调 callback 函数
        if(typeof  callback === 'function') callback();
    });
};

module.exports = RemoveDebug;