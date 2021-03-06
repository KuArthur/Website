import "../../../node_modules/air-datepicker/src/js/air-datepicker";
import "../../../node_modules/air-datepicker/dist/css/datepicker.min.css";

import {Calendar} from "../dropdowns-calendar/dropdowns-calendar";

class singleCalendar extends Calendar {
    
    bindElems(elem) {
        super.bindElems(elem);

        this.dateField = elem.querySelector('.js-dropdown-calendar__field');
        this.fieldIcon = elem.querySelector('.dropdown-calendar__icon');
        this.dateList;
        
    }

    initialize() {
        this.dateList = $(this.elem).find('.js-dropdown-calendar__calendar').datepicker({
            minDate: new Date(),
            autoClose: true,
            offset: -2,
            range: true,
            multipleDatesSeparator: ' - ',
            language: "en",
            clearButton: true,
            prevHtml: "<div>arrow_back</div>",
            nextHtml: "<div>arrow_forward</div>",
            navTitles: {
                days: 'MM <i>yyyy</i>'
            },
            dateFormat: "dd M",
            onSelect: (formattedDate) => {
                $(this.dateField).val(formattedDate);
            }

        })
        this.elem.querySelector(".datepicker--buttons").innerHTML = "<span class='dropdowns-calendar__button-apply js-dropdowns-calendar__button-apply'>Применить</span><span class='datepicker--button' data-action='clear'>Очистить</span>";
        this.dateField.addEventListener('click', super.showCalendar.bind(this))
        
        this.fieldIcon.addEventListener('click', super.showCalendar.bind(this))
        this.elem.querySelector('.js-dropdowns-calendar__button-apply').addEventListener('click', super.closeCalendar.bind(this))

        this.dateList.hide()
    }
}
$(document).ready(function() {
    $('.js-dropdown-calendar').each((i, calendar) => {
        let el = new singleCalendar(calendar);
    });
});


// const calendar =  {
//     prototype: {
//         constructor: () => {
//             // 2

//             this.init();
//         },

//         init: () => {

//         }
//     },

//     constructor: () => {
//         super(); // 1
//     },

//     init: () => {
//         // 3 
//     }
// }