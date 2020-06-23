import "../../../node_modules/air-datepicker/src/js/air-datepicker";
import {get } from "jquery";

class Calendar {
    constructor(elem) {
        this.elem = elem;
        this.start = this.elem.querySelector('.js-dropdowns-calendar__date-from');
        this.end = this.elem.querySelector('.js-dropdowns-calendar__date-to');
        this.dateList;
        this.calendar;
        this.initialize(this.start, this.end)

    }

    initialize(start, end) {
        this.dateList = $(this.elem).find('.js-dropdowns-calendar__calendar').datepicker({
            minDate: new Date(),
            autoClose: true,
            offset: -2,
            range: true,
            multipleDatesSeparator: '-',
            language: "en",
            clearButton: true,
            prevHtml: "<div>arrow_back</div>",
            nextHtml: "<div>arrow_forward</div>",
            navTitles: {
                days: 'MM <i>yyyy</i>'
            },

            onSelect: function(formattedDate) {
                $(start).val(formattedDate.split("-")[0]); // почему не работает $(this.start) Но работает .js-dropdowns-calendar__date-from
                $(end).val(formattedDate.split("-")[1]); // почему не работает $(this.end) Но работает .js-dropdowns-calendar__date-to
            },

        })

        this.elem.querySelector(".datepicker--buttons").innerHTML = "<span class='dropdowns-calendar__button-apply js-dropdowns-calendar__button-apply'>Применить</span><span class='datepicker--button' data-action='clear'>Очистить</span>";
        this.start.addEventListener('click', this.showCalendar.bind(this))
        this.end.addEventListener('click', this.showCalendar.bind(this))
        this.elem.querySelector('.js-dropdowns-calendar__button-apply').addEventListener('click', this.closeCalendar.bind(this))

        this.dateList.hide()

    }

    showCalendar() {
        this.dateList.show()
    }
    closeCalendar() {
        this.dateList.hide()
    }


}

$(document).ready(function() {
    $('.js-dropdowns-calendar').each((i, calendar) => {
        let el = new Calendar(calendar);
    });
});