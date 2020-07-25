class filterMenu {
    constructor(elem) {
        this.elem = elem;
        this.menu = elem.querySelector(".search-room__filter");
        this.menuButton = elem.querySelector(".js-search-room__filter-icon");
        this.closeButton = elem.querySelector(".js-search-room__filter-icon-close");

        this.menuButton.addEventListener('click',this.openMenu.bind(this))
        this.closeButton.addEventListener('click',this.closeMenu.bind(this))
    }

    openMenu(e) {
        let target = e.target.closest(".js-search-room__filter-icon")
        
        if(!target) return;
        this.menu.classList.toggle("search-room__filter_status_visible")
    }

    closeMenu(e) {
        if(this.menu.classList.contains("search-room__filter_status_visible")) {
            target = e.target.closest(".js-search-room__filter-icon-close")
        }
        
        this.menu.classList.toggle("search-room__filter_status_visible")
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const arr = document.querySelectorAll('.search-room');

    for (let domElem of arr) {
        new filterMenu(domElem)
    }
})