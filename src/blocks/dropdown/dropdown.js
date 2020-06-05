import '../counter/counter';
import { Counter } from "../counter/counter";
import Block from '../block/block';

class Dropdown extends Block {
    constructor(domElem) {
        super('dropdown', domElem);

        this.dropdownContent = this.domElem.querySelector('.js-dropdown__expanded');
        this.dropdownButton = this.domElem.querySelector('.js-dropdown__default');
        this.icon = this.domElem.querySelector('.js-dropdown__icon');
        this.dropdownClear = this.domElem.querySelector('.js-dropdown__buttons_clear');
        this.dropdownApply = this.domElem.querySelector('.js-dropdown__buttons_apply');
        this.dropdownButtons = this.domElem.querySelector('.js-dropdown__buttons')
        this.counters = [];
        this.domElem.querySelectorAll('.counter').forEach(el => this.counters.push(el.getBlockInstance('counter')));

        this.counters.forEach(counter => counter.on('value-change', this.onValueChanged.bind(this)));

        this.dropdownButton.addEventListener('click', this.onClick.bind(this));
        this.icon.addEventListener('click', this.onClick.bind(this));

        this.dropdownClear && this.dropdownClear.addEventListener('click', this.clear.bind(this));

    }

    updateText() {
        const text = this.counters.map((counter) => {
            const value = counter.getValue();
            let item;
            if (value === '0') return;
            console.log(value);

            switch (counter.type) {
                case 'СПАЛЬНИ':
                    item = this.getNoun(value, 'спальня', 'спальни', 'спальней')
                    break;
                case 'КРОВАТИ':
                    item = this.getNoun(value, 'кровать', 'кровати', 'кроватей')
                    break;
                case 'ВАННЫЕ КОМНАТЫ':
                    item = this.getNoun(value, 'ванная комната', 'ванные комнаты', 'ванных комнат')
                    break;
                case 'ВЗРОСЛЫЕ':
                    item = this.getNoun(value, 'гость', 'гостя', 'гостей')
                    break;
                case 'ДЕТИ':
                    item = this.getNoun(value, 'гость', 'гостя', 'гостей')
                    break;
                case 'МЛАДЕНЦЫ':
                    item = this.getNoun(value, 'гость', 'гостя', 'гостей')
                    break;

            }
            return value + ' ' + item
        }).filter(Boolean).join(', ');

        console.log(text);

        console.log(this.dropdownButton);
        this.dropdownButton.value = text;
        if (this.dropdownClear && this.dropdownButton.value === '') this.dropdownClear.classList.remove('dropdown__buttons_clear_status_enabled')
    }

    onValueChanged() {
        this.dropdownClear && this.dropdownClear.classList.add('dropdown__buttons_clear_status_enabled')
        this.updateText();

    }

    onClick(e, target) {
        this.drop();
    }

    drop() {
        this.dropdownContent.classList.toggle("dropdown__expanded_status_enabled");
    }

    getNoun(number, one, two, five) {
        let n = Math.abs(number);
        while (n != 0) {
            n %= 100;
            if (n >= 5 && n <= 20) {
                return five;
            }
            n %= 10;
            if (n === 1) {
                return one;
            }
            if (n >= 2 && n <= 4) {
                return two;
            }
            return five;
        }
    }

    clear() {

        const counterValue = this.counters.map((counter) => {
            let value = counter.setValue('0')
            return value;
        });

        this.dropdownButton.value = ''
        this.dropdownClear.classList.remove('dropdown__buttons_clear_status_enabled');
    }

    // updateTextGuest() {
    //     const text = this.counters.map((counter) => {
    //         const value = counter.getValue();
    //         let item;
    //         if (value === '0') return;
    //         console.log(value);

    //         switch (counter.type) {
    //             case 'ВЗРОСЛЫЕ':
    //                 item = this.getNoun(value, 'гость', 'гостя', 'гостей')
    //                 break;
    //             case 'ДЕТИ':
    //                 item = this.getNoun(value, 'гость', 'гостя', 'гостей')
    //                 break;
    //             case 'МЛАДЕНЦЫ':
    //                 item = this.getNoun(value, 'гость', 'гостя', 'гостей')
    //                 break;

    //         }
    //         return counter.setValue(value) + ' ' + item
    //     }).filter(Boolean);

    //     this.dropdownButton.value = text;
    //     if (this.dropdownButton.value === '') this.dropdownClear.classList.remove('dropdown__expanded__buttons_clear_status_enabled')
    // }

}

document.addEventListener("DOMContentLoaded", function() {
    const arr = document.querySelectorAll('.dropdown');

    for (let domElem of arr) {
        console.log(domElem)
        new Dropdown(domElem)
    }
})