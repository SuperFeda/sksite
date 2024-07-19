const list = document.querySelector('.options-list');

function changeLangListVisibylity(): void {
    if (list.style.display === 'grid') {
        list.style.display = 'none'
    } else {
        list.style.display = 'grid'
    }
}

document.getElementById("burger-button").addEventListener("click", (): void => {
    document.getElementById("adap-site-header").classList.toggle("active-header")
})
