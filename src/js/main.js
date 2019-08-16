"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below


console.log(`Hello world!`);

const addBtn = document.querySelector(".frame__button--add--js");
const removeBtn = document.querySelector(".frame__button--remove--js");
const glassNum = document.querySelector(".frame_num--js");

let glassAmount = 0;
const key = new Date().toISOString().slice(0, 10);
if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, 0);
} else {
    glassAmount = localStorage.getItem(key);
}

glassNum.innerHTML = glassAmount;

addBtn.addEventListener('click', e => {
    glassAmount = parseInt(glassNum.innerHTML);
    if (glassAmount < 9) {
        glassAmount++;
        glassNum.innerHTML = glassAmount;
        storeGlassNum(glassAmount);
    }
});

removeBtn.addEventListener('click', e => {
    glassAmount = parseInt(glassNum.innerHTML);
    if (glassAmount > 0) {
        glassAmount--;
        glassNum.innerHTML = glassAmount;
        storeGlassNum(glassAmount);
    }
});

function storeGlassNum(value) {
    const key = new Date().toISOString().slice(0, 10);
    localStorage.setItem(key, value);
}