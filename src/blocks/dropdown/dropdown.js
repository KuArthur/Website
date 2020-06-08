import '../counter/counter';
import { Counter } from "../counter/counter";
import Block from '../block/block';

class Dropdown extends Block {
    constructor(domElem) {
        super('dropdown', domElem);

        this.dropdownContent = this.domElem.querySelector('.js-dropdown__expanded');
        this.dropdownButton = this.domElem.querySelector('.js-dropdown__default');
        this.icon = this.domElem.querySelector('.js-dropdown__icon');
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
            if (value === 0) return;
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

        this.dropdownButton.value = text;
        if (this.dropdownClear && this.dropdownButton.value === '') this.dropdownClear.classList.remove('dropdown__buttons_clear_status_enabled')
    }

    onValueChanged() {
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

class DropdownGuest extends Dropdown {
    constructor(domElem) {
        super(domElem)
        this.dropdownClear = this.domElem.querySelector('.js-dropdown__buttons_clear');
        this.dropdownApply = this.domElem.querySelector('.js-dropdown__buttons_apply');
        this.dropdownButtons = this.domElem.querySelector('.js-dropdown__buttons');

        this.dropdownClear.addEventListener('click', this.clear.bind(this));
        this.dropdownApply.addEventListener('click', this.apply.bind(this))
    }

    updateText() {
        const sum = this.counters.reduce((acc, counter) => {
            return acc + counter.getValue();
        }, 0);

        const text = this.getNoun(sum, 'гость', 'гостя', 'гостей');
        this.dropdownButton.value = sum !== 0 ? (sum + ' ' + text) : '';

        if (!this.dropdownButton.value) {
            this.dropdownClear.classList.remove('dropdown__buttons_clear_status_enabled');
        } else {
            this.dropdownClear.classList.add('dropdown__buttons_clear_status_enabled');
        }
    }

    onValueChanged() {
        super.onValueChanged();
        // this.dropdownClear && this.dropdownClear.classList.add('dropdown__buttons_clear_status_enabled')
    }

    clear() {
        this.counters.forEach((counter) => {
            counter.setValue(0);
        });

        this.dropdownButton.value = ''
        this.dropdownClear.classList.remove('dropdown__buttons_clear_status_enabled');
    }
    apply() {
        super.drop()
    }
}

document.addEventListener("DOMContentLoaded", function() {
    for (let domElem of document.querySelectorAll('.dropdown-guest')) {
        new DropdownGuest(domElem)
    }

    for (let domElem of document.querySelectorAll('.dropdown-items')) {
        new Dropdown(domElem)
    }
})