import "../../../node_modules/air-datepicker/src/js/air-datepicker";

let dropdownCalendar = document.querySelector('.js-dropdown-calendar__field');
$(dropdownCalendar).datepicker({
        minDate: new Date(),
        autoClose: true,
        offset: -2,
        range: true,
        classes: 'dropdown-calendar__width',
        multipleDatesSeparator: ' - ',
        language: "en",
        clearButton: true,
        prevHtml: "<div>arrow_back</div>",
        nextHtml: "<div>arrow_forward</div>",
        navTitles: {
            days: 'MM <i>yyyy</i>'
        },
        dateFormat: "dd M",
    })
    // $(document).ready(function() {
    //     $('.js-dropdown-calendar').each((i, calendar) => {
    //         let el = new dropCalendar(calendar);
    //     });
    // });