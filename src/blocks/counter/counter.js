import $ from 'jquery';
import "jquery-ui";

$(document).ready(function() {
    $('button').click(function(e) {
        var button_classes, value = +$('.js-counter__input').val();
        button_classes = $(e.currentTarget).prop('class');
        if (button_classes.indexOf('js-counter__button-plus') !== -1) {
            value = (value) + 1;
        } else {
            value = (value) - 1;
        }
        value = value < 0 ? 0 : value;
        $('.counter__input').val(value);
        if (value !== 0) {
            $(".js-counter__button-minus").removeClass("counter__button_status-disabled");
        } else {
            $(".js-counter__button-minus").addClass("counter__button_status-disabled");
        }

    });
    $('.js-counter__input').click(function() {
        $(this).focus().select();

    });

});