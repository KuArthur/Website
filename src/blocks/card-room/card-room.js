import "slick-carousel";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


class cardRoom {
    constructor() {
        this._init();
    }

    _init() {
        $(document).ready(function () {
            $('.card-room__img').slick({
                dots: true,
                nextArrow: '<span class="card-room__slick-next">chevron_right</span>',
                prevArrow: '<span class ="card-room__slick-prev">chevron_left</span>' ,
            });
        });
    }
}

new cardRoom();