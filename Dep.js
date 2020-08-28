function Dep() {
    this.subs = [];
}
Dep.prototype = {
    constructor: Dep,
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}
//全局唯一订阅者
Dep.target = null;