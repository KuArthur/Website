import "air-datepicker";

$('.js-dropdowns-calendar__calendar').datepicker({
    inline: true,
    prevHtml: "<div>arrow_back</div>",
    nextHtml: "<div>arrow_forward</div>",
    clearButton: true
})


// $(function() {

//     let $start = $('.js-dropdowns-calendar__date-from'),
//         $end = $('.js-dropdowns-calendar__date-to');

//     let picker = $('#start').datepicker({
//         range: true,
//         multipleDatesSeparator: '-',
//         language: "en",
//         clearButton: true,
//         todayButton: true,
//         classes: 'abs',

//         onSelect: function(fd, d, picker) {
//             $(".js-dropdowns-calendar__date-from").val(fd.split("-")[0]);
//             $("#end").val(fd.split("-")[1]);
//         },
//         onHide: function() {
//             console.log(this);
//         }
//     }).data('datepicker');

//     $('.js-dropdowns-calendar__date-to').on('click', () => {
//         picker.show();
//     });
// });