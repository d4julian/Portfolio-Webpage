const enterButton = document.getElementById("enter");
import { fadeWireframe } from "./canvas";

export default function isSplash() {
    return document.getElementById("splash-components").style.display != "none";
}

function fadeOut(element, callback) {
    fadeWireframe();
    element.classList.add('fade');
    setTimeout(() => {
        element.style.visibility = "hidden";
        element.classList.remove('fade');
        element.style.display = "none";
        
        callback();
    }, 250);
}

function fadeIn(element) {
    element.classList.add('fade');
    setTimeout(() => {
        element.style.visibility = "visible";
        element.classList.remove("fade");
    }, 250);
}

enterButton.addEventListener("click", () =>
    fadeOut(document.getElementById("splash-components"), () => 
        Array.from(document.getElementsByClassName("main-content")).forEach(element => fadeIn(element))));

