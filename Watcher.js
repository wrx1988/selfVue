function Watcher(vm, exp, cb) {
    this.vm = vm; //vm实例
    this.exp = exp;//node节点指令属性值
    this.cb = cb;//更新函数
    this.value = this.get(); //将自己添加至订阅器的操作
}
Watcher.prototype = {
    constructor: Watcher,
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if(oldVal !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal)
        }
    },
    get: function() {
        Dep.target = this; //全局变量订阅者保存
        var value = this.vm.data[this.exp];//显示调用属性get方法，添加订阅者
        Dep.target = null;//全局变量订阅者释放
        return value;
    }
}