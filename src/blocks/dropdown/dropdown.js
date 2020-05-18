import '../counter/counter';
import { Counter } from "../counter/counter";

const dropdown = document.querySelector('.dropdown');
const dropdownButton = document.querySelector('.js-dropdown__default');
const dropdownContent = document.querySelector('.js-dropdown__expanded');
let dropdownIcon = document.querySelector('.dropdown__icon');;

dropdown.onclick = function(event) {
    dropdownContent.classList.toggle("dropdown__expanded_status_enabled");
}