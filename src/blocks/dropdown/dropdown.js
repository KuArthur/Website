import '../counter/counter';
import { Counter } from "../counter/counter";
import Block from '../block/block';

class Dropdown extends Block {
    constructor(domElem) {
        super('dropdown', domElem);

        this.dropdownContent = this.domElem.querySelector('.js-dropdown__expanded');
        this.dropdownButton = this.domElem.querySelector('.js-dropdown__default');
        this.icon = this.domElem.querySelector('.dropdown__icon');
        this.counters = [];
        this.domElem.querySelectorAll('.counter').forEach(el => this.counters.push(el.getBlockInstance('counter')));

        this.counters.forEach(counter => counter.on('value-change', this.onValueChanged.bind(this)));

        this.dropdownButton.addEventListener('click', this.onClick.bind(this));
        this.icon.addEventListener('click', this.onClick.bind(this));
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

            }

            return value + ' ' + item
        }).filter(Boolean).join(', ');

        console.log(text);

        console.log(this.dropdownButton);
        this.dropdownButton.value = text;

    }

    onValueChanged() {
        this.updateText();
    }

    // updateValueCounter() {
    //     return this.valueCounter
    // }

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

}

document.addEventListener("DOMContentLoaded", function() {
    const arr = document.querySelectorAll('.dropdown');

    for (let domElem of arr) {
        console.log(domElem)
        new Dropdown(domElem)
    }
})