/* Task1 */
const rect = document.getElementById('rect');

const buttonNone = document.querySelector('.button__box-none');
const buttonRemove = document.querySelector('.button__box-remove');
const buttonHidden = document.querySelector('.button__box-hiden');
const switchButton = document.querySelector('.button__box-swich');

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

/* Task13 */

const local = document.getElementById('local');
const coockies = document.getElementById('coockies');
const session = document.getElementById('session');

const boxes = document.getElementsByClassName('editable__box');
const defaultText = "Some text"

window.addEventListener('load', function(){
    let localText = this.localStorage.getItem('local') || defaultText;
    let sessionText = this.sessionStorage.getItem('session') || defaultText;
    let coockiesText = getCookie('coockies') || defaultText;
    local.innerHTML = localText;
    session.innerHTML = sessionText;
    coockies.innerHTML = coockiesText;
});

function getCookie(cname) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieElements = decodedCookie.split(';');
    for (let element of cookieElements) {
        let [key, value] = element.trim().split("=");
        if (key === cname) {
            return value;
        }
    }
    return null;
}

for(let box of boxes){
    box.addEventListener('input', function(event){
        let changedText = event.target.innerHTML;
        let elementId = event.target.id;
        console.log(elementId);
        switch (elementId) {
            case 'local':
                localStorage.setItem(elementId, changedText);
                break;
        
            case 'coockies':
                const date = new Date();
                date.setTime(date.getTime() + 1000) // 1minute
                let expires = "expires="+ date.toUTCString();
                document.cookie = encodeURIComponent(`${elementId}=${changedText};${expires};path=/`);
                console.log(decodeURIComponent(document.cookie));
                break;

            case 'session':
                sessionStorage.setItem(elementId, changedText);
                break;

            default:
                break;
        }
    });
}

/* Task14 */

const linkUp = document.querySelector('.link__up');

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 500) {
        linkUp.style.display = "block";
    } else {
        linkUp.style.display = "none";
    }
});
  

linkUp.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

/* Task15 */

const doobleBoxs = document.getElementsByClassName('double__box');

for(let box of doobleBoxs){
    box.addEventListener('click', function(event){
        event.stopPropagation();
        alert(event.target.id);
    });
};

/* Task16 */

const popupBtn = document.querySelector('.popup__btn');
const popup = document.querySelector('.popup')

popupBtn.addEventListener('click', function(){
    popup.style.display = 'block';
    popup.addEventListener('click', function(){
        popup.style.display = 'none';
    })
});

/* Task17 */

const forma = document.querySelector('form');

forma.addEventListener('submit', function(event){
    event.preventDefault();
})

/* Task18 */

const fileDropArea = document.getElementById('fileDropArea');

['dragenter', 'dragover', 'dragleave','drop'].forEach(eventName => {
    fileDropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    fileDropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    fileDropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
    fileDropArea.classList.add('hover');
}

function unhighlight() {
    fileDropArea.classList.remove('hover');
}

fileDropArea.addEventListener('drop', function(e){
    fileDropArea.classList.add('drop')
});

fileDropArea.addEventListener('change', function(){
    fileDropArea.classList.add('drop')
})
