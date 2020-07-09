import "../../../node_modules/air-datepicker/src/js/air-datepicker";
import "../../../node_modules/air-datepicker/dist/css/datepicker.min.css";

class Calendar {
    constructor(elem) {
        console.log('Calendar constructor');
        console.log('bind elems ...');

        
        this.bindElems(elem);
        this.initialize(this.start, this.end)
    }

    bindElems(elem) {
        this.elem = elem;
        this.start = this.elem.querySelector('.js-dropdowns-calendar__date-from');
        this.end = this.elem.querySelector('.js-dropdowns-calendar__date-to');
        this.icon = this.elem.querySelector('.dropdowns-calendar__icon');
        
        this.dateList;
        this.calendar;
    }

    initialize(start, end) {
        console.log('BASE');
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
            }

        })

        this.elem.querySelector(".datepicker--buttons").innerHTML = "<span class='dropdowns-calendar__button-apply js-dropdowns-calendar__button-apply'>Применить</span><span class='datepicker--button' data-action='clear'>Очистить</span>";
        this.start.addEventListener('click', this.showCalendar.bind(this))
        this.end.addEventListener('click', this.showCalendar.bind(this))
        this.icon.addEventListener('click', this.showCalendar.bind(this))
        this.elem.querySelector('.js-dropdowns-calendar__button-apply').addEventListener('click', this.closeCalendar.bind(this))

        this.dateList.hide()
            //window.addEventListener('click', this.closeCalendarOutside.bind(this))
            //this.closeCalendarOutside()

    }

    showCalendar() {
        this.dateList.show()
    }
    closeCalendar() {
        this.dateList.hide()
    }
        closeCalendarOutside(e) {
            let target = e.target;
            if (!target === this.start) {
                this.dateList.hide()
            }
        }

    }

    $(document).ready(function() {
        $('.js-dropdowns-calendar').each((i, calendar) => {
        let el = new Calendar(calendar);
    });
});

export {Calendar}