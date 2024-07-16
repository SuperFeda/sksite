const list = document.querySelector('.options-list');

function changeLangListVisibylity() {
    if (list.style.display === 'grid') {
        list.style.display = 'none'
    } else {
        list.style.display = 'grid'
    }
}

document.getElementById("burger-button").addEventListener("click", () => {
    document.getElementById("adap-site-header").classList.toggle("active-header")
})

