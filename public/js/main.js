let barProgress = document.getElementById('bar-progress');

let sections = document.getElementsByTagName('section');

let clicked = 1;

setProgress(clicked / sections.length);

function nextPage() {
    clicked++;
    setProgress(clicked / sections.length);
}

function prevPage() {
    clicked--;
    setProgress(clicked / sections.length);
}

function setProgress(progress) {
    barProgress.style.width = (progress * 100) + '%';
}