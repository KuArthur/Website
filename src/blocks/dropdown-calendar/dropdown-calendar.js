import "../../../node_modules/air-datepicker/src/js/air-datepicker";
import Calendar from "../dropdowns-calendar/dropdowns-calendar"
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
    $(document).ready(function() {
        $('.js-dropdown-calendar').each((i, calendar) => {
            let el = new dropCalendar(calendar);
        });
    });

// class singleCalendar extends Calendar {
//     constructor(elem) {
//         super(elem);
//         this.elem = elem;
//         this.dateField = elem.querySelector('.js-dropdown-calendar__field');
//         this.fieldIcon = elem.querySelector('.dropdown-calendar__icon');
//         this.dateList;
//         this.initialize(this.dateField);
//     }
//     initialize(field) {
//         this.dateList = $(this.elem).find('.js-dropdown-calendar__calendar').datepicker({
//             minDate: new Date(),
//             autoClose: true,
//             offset: -2,
//             range: true,
//             multipleDatesSeparator: '-',
//             language: "en",
//             clearButton: true,
//             prevHtml: "<div>arrow_back</div>",
//             nextHtml: "<div>arrow_forward</div>",
//             navTitles: {
//                 days: 'MM <i>yyyy</i>'
//             },
//             dateFormat: "dd M",
            

//         })
//         this.elem.querySelector(".datepicker--buttons").innerHTML = "<span class='dropdowns-calendar__button-apply js-dropdowns-calendar__button-apply'>Применить</span><span class='datepicker--button' data-action='clear'>Очистить</span>";
//         this.dateField.addEventListener('click', this.showCalendar.bind(this))
        
//         this.fieldIcon.addEventListener('click', this.showCalendar.bind(this))
//         this.elem.querySelector('.js-dropdowns-calendar__button-apply').addEventListener('click', this.closeCalendar.bind(this))

//         this.dateList.hide()
//     }
// }
// $(document).ready(function() {
//     $('.js-dropdown-calendar').each((i, calendar) => {
//         let el = new singleCalendar(calendar);
//     });
// });
