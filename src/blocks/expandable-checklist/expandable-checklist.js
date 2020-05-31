// const expandableList = document.querySelector(".expandable-checklist")
// const items = document.querySelector(".js-expandable-checklist__items")
// const button = document.querySelector('.expandable-checklist__button')
// const icon = document.querySelector('.expandable-checklist__icon')

// function dropList(e) {
//     target = e.target.closest('.expandable-checklist__button');
//     if (!target) return;
//     items.classList.toggle("expandable-checklist__items_status_enabled")
//         //icon.innerHTML = 'keyboard_arrow_up'
// }

// expandableList.addEventListener('click', dropList)
class ExpandableCheckList {
    constructor(elem) {
        this.elem = elem
        this.button = elem.querySelector('.expandable-checklist__button')
        this.items = elem.querySelector(".js-expandable-checklist__items")
        this.icon = elem.querySelector('.expandable-checklist__icon')

        this.button.addEventListener('click', this.dropList.bind(this))
        this.button.addEventListener('click', this.changeIcon.bind(this))
    }

    dropList(e) {
        target = e.target.closest('.expandable-checklist__button');
        if (!target) return;
        this.items.classList.toggle("expandable-checklist__items_status_enabled")

    }
    changeIcon() {
        if (this.items.classList.contains("expandable-checklist__items_status_enabled")) {
            this.icon.innerHTML = 'keyboard_arrow_up'
        } else this.icon.innerHTML = 'keyboard_arrow_down'
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const arr = document.querySelectorAll('.expandable-checklist');

    for (let domElem of arr) {
        console.log(domElem)
        new ExpandableCheckList(domElem)
    }
})