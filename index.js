let minutesContainer = document.querySelector('#minutes');
let secondesContainer = document.querySelector('#secondes');
let start = document.querySelector('#start');
let shortBreak = document.querySelector('#break');
let stop = document.querySelector('#stop');
let minutes = 25;
let secondes = 00;

let imgContainer = document.querySelector('#imgContainer')
let img = document.createElement('img');
img.src = 'itadori.gif';
imgContainer.appendChild(img);

img.onmousedown = function (event) {
    img.style.position = 'absolute';
    img.style.zIndex = 1000;

    imgContainer.appendChild(img);

    function moveAt(pageX, pageY) {
        img.style.left = pageX - img.offsetWidth / 2 + 'px';
        img.style.top = pageY - img.offsetHeight / 2 + 'px';
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);

    img.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        img.onmouseup = null;
    };

};

img.ondragstart = function() {
    return false;
  };

minutesContainer.innerHTML = minutes;
secondesContainer.innerHTML = secondes;

start.addEventListener('click', function () {
    let minutes = 25;
    let secondes = 00;

    time = setInterval(function () {
        if (secondes == 0) {
            minutes -= 1;
            minutesContainer.innerHTML = minutes;
            secondes = 60;
        } else {
            console.log(secondes);
            secondes -= 1;
            secondesContainer.innerHTML = secondes;
        }
    }, 1000);
    clearInterval(short);
});

shortBreak.addEventListener('click', function () {
    let minutes = 5;
    let secondes = 00;

    // minutesContainer.innerHTML = minutes;
    // secondesContainer.innerHTML = secondes;
    short = setInterval(function () {
        if (secondes == 0) {
            minutes -= 1;
            minutesContainer.innerHTML = minutes;
            secondes = 60;
            console.log(minutes);
        } else {
            secondes -= 1;
            secondesContainer.innerHTML = secondes;
        }
    }, 1000);
    clearInterval(time);
});

stop.addEventListener('click', function () {
    clearInterval(time);
    clearInterval(short);
});