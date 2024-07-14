const list = document.querySelector('.options-list');

function changeLangListVisibylity() {
    if (list.style.display === 'block') {
        list.style.display = 'none'
    } else {
        list.style.display = 'block'
    }
}