/* function compileText(node, exp) {
    var self = this;
    var initText = this.vm[exp];
    this.updateText(node, initText);
    new Watcher(this.vm, exp, function(value) {
        self.updateText(node, value);
    });
} */
function compile(node, data) {
    if(node.attributes) {
        [].forEach.call(node.attributes,(element) => {
            if(element.attribute.name.includes('v-')) {
                Update[element.attribute](element, data, element.value)
            }
        })
    };
    [].forEach.call(el.childNodes,child => {
        compile(child, data);
    })
}
const Update = {
    'v-text'(el, data, key) {
        el.innerText = data[key];
        new Watcher();
    },
    'v-model'(el, data, key) {
        el.value = data[key];
        input.addEventListener('keyup', e => {
            data[key] = e.target.value;
        });
    }
}