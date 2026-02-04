//your JS code here. If required.
let targetElement = document.getElementById('level');

let domLevel = 0;

while (targetElement) {
    domLevel++;
    targetElement = targetElement.parentElement;
}

alert("The level of the element is: " + domLevel);