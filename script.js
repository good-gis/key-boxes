const keyElem = document.querySelectorAll('#insert .key')

window.addEventListener('keydown', (e) => {
    keyElem.item(0).childNodes[0].textContent = e.key === ' ' ? 'Space' : e.key;
    keyElem.item(1).childNodes[0].textContent = e.keyCode;
    keyElem.item(2).childNodes[0].textContent = e.code;
})