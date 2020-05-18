import $ from 'jquery';
import "jquery-ui";

function Counter(counterDom, options = {}) {
    const self = {};
    const counter = $(counterDom);

    // Classnames of elements;
    const cn = {
        input: 'js-counter__input',
        minus: 'js-counter__button_type_minus',
        plus: 'js-counter__button_type_plus',
        disabled: 'counter__button_status-disabled',
    }

    // Options
    self.min = options.min || 0;
    self.max = options.max || 5;

    // Elements
    self.input = counter.find(`.${cn.input}`);
    self.minus = counter.find(`.${cn.minus}`);
    self.plus = counter.find(`.${cn.plus}`);

    // Events
    $(self.minus).click(onButtonClick);
    $(self.plus).click(onButtonClick);
    $(self.input).click(onInputClick);

    function isButtonDisabled(button) {
        return $(button).hasClass(cn.disabled);
    }

    function updateButtonsStatus() {
        const value = self.input.val();
        const { minus, plus } = self;

        value <= self.min ?
            minus.addClass(cn.disabled) :
            minus.removeClass(cn.disabled)

        value >= self.max ?
            plus.addClass(cn.disabled) :
            plus.removeClass(cn.disabled);
    }

    function onInputClick() {
        $(this).focus().select();
    }

    function onButtonClick(e) {
        if (isButtonDisabled(this)) {
            return;
        }

        const delta = Number(this.dataset.delta);
        const newValue = Number(self.input.val()) + delta;

        self.input.val(newValue);

        updateButtonsStatus();
    }
}


$(document).ready(function() {
    $('.counter').each((i, counter) => {
        new Counter(counter);
    });
});

export { Counter };