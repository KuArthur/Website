export default class Block {
    constructor(blockName, domElem) {
        domElem.getBlockInstance = function(blockName) {
            return domElem.blockInstance[blockName];
        }

        domElem.blockInstance = domElem.blockInstance || {};
        domElem.blockInstance[blockName] = this;

        this.domElem = domElem;

        this._events = {};
    }

    on(eventName, fn) {
        const event = this._events[eventName] || [];
        event.push(fn);
        this._events[eventName] = event;
    }

    trigger(eventName, data) {
        const event = this._events[eventName];

        if (!event) return;

        event.forEach(e => e(data))
    }


}