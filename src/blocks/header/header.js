
// const header = document.querySelector(".header")
// const menu = header.querySelector(".header__menu");
// const menuButton = header.querySelector(".js-header__menu-icon");
// const closeButton = header.querySelector(".js-header__close-icon");


// function openMenu(e) {
//     let target = e.target.closest(".js-header__menu-icon")
    
//     if(menu.classList.contains("header__menu_status_visible")) {
//         target = e.target.closest(".js-header__close-icon")
//     }

//     if(!target) return;
//     menu.classList.toggle("header__menu_status_visible")
    
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const arr = document.querySelectorAll('.header');
//     console.log(arr);

//     for (let domElem of arr) {
//         console.log(domElem)
//         domElem.addEventListener('click',openMenu.bind(this.domElem))
//     }
// })

class HeaderMenu {
    constructor(elem) {
        this.elem = elem;
        this.menu = elem.querySelector(".header__menu");
        this.menuButton = elem.querySelector(".js-header__menu-icon");
        this.closeButton = elem.querySelector(".js-header__close-icon");

        this.menuButton.addEventListener('click',this.openMenu.bind(this))
        this.closeButton.addEventListener('click',this.closeMenu.bind(this))
    }

    openMenu(e) {
        let target = e.target.closest(".js-header__menu-icon")
        
        if(!target) return;
        this.menu.classList.toggle("header__menu_status_visible")
    }

    closeMenu(e) {
        if(this.menu.classList.contains("header__menu_status_visible")) {
            target = e.target.closest(".js-header__close-icon")
        }
        
        this.menu.classList.toggle("header__menu_status_visible")
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const arr = document.querySelectorAll('.header');
    console.log(arr);

    for (let domElem of arr) {
        console.log(domElem)
        new HeaderMenu(domElem)
    }
})