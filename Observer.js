function observerable(obj) {
    if(!obj || typeof obj !== 'object') {
        return;
    }
    let keys = Object.keys(obj);
    keys.forEach(key => {
        defineReactive(obj, key, obj[key]);
    })
}
function defineReactive(obj, key, val) {
    var dep = new Dep();
    observerable(val);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        get: function getter() {
            if(Dep.target) {
                dep.addSub(Dep.target)
            }
            return val;
        },
        set: function setter(newVal) {
            if(newVal === val) {
                return;
            }
            val = newVal;
            dep.notify();
        }
    })
}