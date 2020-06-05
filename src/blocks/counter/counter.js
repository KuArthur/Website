import Block from '../block/block';

class Counter extends Block {
    constructor(domElem) {
        super('counter', domElem);

        this.input = this.domElem.querySelector('.js-counter__input');
        this.minus = this.domElem.querySelector('.js-counter__button_type_minus');
        this.plus = this.domElem.querySelector('.js-counter__button_type_plus');


        this.minus.addEventListener('click', this.onButtonClick.bind(this));
        this.plus.addEventListener('click', this.onButtonClick.bind(this));
    }

    isButtonDisabled(button) {
        return button.classList.contains('counter__button_status-disabled')
    }

    updateButtonStatus() {
        const value = Number(this.input.value);

        value <= 0 ?
            this.minus.classList.add('counter__button_status-disabled') :
            this.minus.classList.remove('counter__button_status-disabled')

        value >= 5 ?
            this.plus.classList.add('counter__button_status-disabled') :
            this.plus.classList.remove('counter__button_status-disabled');
    }

    onButtonClick(e) {
        const button = e.target;
        console.log(e.currentTarget);

        if (this.isButtonDisabled(button)) return;

        const delta = Number(button.dataset.delta);
        const newValue = Number(this.input.value) + delta;

        this.input.value = newValue;

        this.trigger('value-change', {
            value: this.input.value,
            type: this.type,
        });

        this.updateButtonStatus();
    }

    get type() {
        return this.domElem.dataset.type;
    }

    set type(text) {
        this.domElem.dataset.type = text;
    }

    getValue(a) {
        return this.input.value;
    }
    setValue(value) {
        this.input.value = value;
    }

}


document.addEventListener("DOMContentLoaded", function() {
    const arr = document.querySelectorAll('.counter');

    for (let domElem of arr) {
        new Counter(domElem);
    }
})

export { Counter };