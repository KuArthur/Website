import $ from 'jquery';
// import "jquery-ui";

// function Counter(counterDom, options = {}) {
//     const self = {};
//     const counter = $(counterDom);

//     // Classnames of elements;
//     const cn = {
//         input: 'js-counter__input',
//         minus: 'js-counter__button_type_minus',
//         plus: 'js-counter__button_type_plus',
//         disabled: 'counter__button_status-disabled',
//     }

//     // Options
//     self.min = options.min || 0;
//     self.max = options.max || 5;

//     // Elements
//     self.input = counter.find(`.${cn.input}`);
//     self.minus = counter.find(`.${cn.minus}`);
//     self.plus = counter.find(`.${cn.plus}`);

//     // Events
//     $(self.minus).click(onButtonClick);
//     $(self.plus).click(onButtonClick);
//     $(self.input).click(onInputClick);

//     function isButtonDisabled(button) {
//         return $(button).hasClass(cn.disabled);
//     }

//     function updateButtonsStatus() {
//         const value = self.input.val();
//         const { minus, plus } = self;

//         value <= self.min ?
//             minus.addClass(cn.disabled) :
//             minus.removeClass(cn.disabled)

//         value >= self.max ?
//             plus.addClass(cn.disabled) :
//             plus.removeClass(cn.disabled);
//     }

//     function onInputClick() {
//         $(this).focus().select();
//     }

//     function onButtonClick(e) {
//         if (isButtonDisabled(this)) {
//             return;
//         }

//         const delta = Number(this.dataset.delta);
//         const newValue = Number(self.input.val()) + delta;

//         self.input.val(newValue);

//         updateButtonsStatus();
//     }
// }


// $(document).ready(function() {
//     $('.counter').each((i, counter) => {
//         new Counter(counter);
//     });
// });

// export { Counter };

class Counter {
    constructor(domElem) {
        this.domElem = domElem;

        this.input = domElem.querySelector('.js-counter__input')
        this.minus = domElem.querySelector('.js-counter__button_type_minus')
        this.plus = domElem.querySelector('.js-counter__button_type_plus')
        console.log(666);
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

        this.updateButtonStatus();
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const arr = document.querySelectorAll('.counter');

    for (let domElem of arr) {
        new Counter(domElem)
    }
})