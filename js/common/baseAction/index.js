export default class BaseAction {
    constructor(parent: Object) {
        if (!parent) return
        if (this) {
            const protoType = Object.getPrototypeOf(this)
            Object.getOwnPropertyNames(protoType).forEach(name => {
                if (typeof this[name] === 'function') {
                    parent[name] = this[name].bind(parent)
                }
            })
        }
    }

}