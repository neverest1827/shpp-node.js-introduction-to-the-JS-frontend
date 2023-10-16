const rect = document.getElementById('rect');

const buttonNone = document.querySelector('.button__box-none');
const buttonRemove = document.querySelector('.button__box-remove');
const buttonHidden = document.querySelector('.button__box-hiden');
const switchButton = document.querySelector('.button__box-swich');

/* Task1 */

buttonNone.addEventListener('click', function(){
    rect.style.display = 'none';
});

buttonRemove.addEventListener('click', function(){
    rect.remove();
});

buttonHidden.addEventListener('click', function(){
    rect.setAttribute('class', 'hiden');
});

/* Task2 */

switchButton.addEventListener('click', function(){
    rect.classList.toggle('swich');
});

/* Task3 */

const rects = document.getElementsByClassName('rect');
const switchButtonTask3 = document.querySelector('.button__box-swich3');

switchButtonTask3.addEventListener('click', function (){
    for(let rect of rects){
        rect.classList.toggle('swich');
    }
});

/* Task4 */

// const input = document.getElementById('input');
const input = document.querySelector('.input');
const switchButtonTask4 = document.querySelector('.button__box-swich4');

switchButtonTask4.addEventListener('click', function(){
    const targetElement = document.querySelector(input.value); 
    if (targetElement) { 
        targetElement.classList.toggle('swich'); 
    } else {
        console.log('Element not found'); 
    }
});

/* Task5 */

const yellowRect = document.querySelector('.yellow');
let isFirstClick = true

yellowRect.addEventListener('click', function(){
    if (isFirstClick){
        alert('Привіт')
    } else {
        yellowRect.style.display = 'none'
    }

    isFirstClick = !isFirstClick;
})

/* Task6 */

const buttonTask6 = document.querySelector('.button__red');
const redRect = document.querySelector('.red');

buttonTask6.addEventListener('mouseover', function(){
    redRect.style.visibility = 'visible';
});

buttonTask6.addEventListener('mouseout', function(){
    redRect.style.visibility = 'hidden';
});

/* Task7 */

const greenInput = document.querySelector('.input-green');
const greenRect = document.querySelector('.green');

greenInput.addEventListener('focus', function(){
    greenRect.style.visibility = 'visible';
});

greenInput.addEventListener('input', function(){
    greenRect.style.visibility = 'hidden';
});

/* Task8 */

const inputImg = document.querySelector('.input-img');
const buttonImg = document.querySelector('.button-img');
const img = document.querySelector('.img');

buttonImg.addEventListener('click', function(){
    img.setAttribute('src', inputImg.value);
});

/* Task9 */

const textarea = document.querySelector('.textarea');
const textareaButton = document.querySelector('.button-textarea');
const imgBox = document.getElementById('img-box')


textareaButton.addEventListener('click', function(){
    let links = textarea.value.split('\n');
    if (links.length){
        for(let link of links){
            const newImg = document.createElement('img');
            newImg.setAttribute('class', 'img');
            newImg.setAttribute('src', link);
            imgBox.appendChild(newImg);
        }
    } else {
        console.log('Empty field');
    }
});

/* Task10 */

const cursorInfo = document.querySelector('.cursor-info');

document.addEventListener('mousemove', function(event){
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    cursorInfo.innerHTML = `X: ${mouseX}, Y: ${mouseY}`;
});

/* Task11 */

const userLanguage = navigator.language || navigator.userLanguage;
const navigatorInfo = document.querySelector('.navigator-info');

navigatorInfo.innerHTML = userLanguage;

/* Task12 */

const geoInfo = document.querySelector('.geo-info');

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        geoInfo.innerHTML = `Ш: ${latitude}, Д: ${longitude}`;
    });
} else {
    console.log("Geo is not support");
}

