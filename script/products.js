// ANIMASI HOVER BOX
let hoverProducts = document.querySelector('#hover-box');
let hoverMarketPlace = document.querySelector('#hover-box2');
function hoverBox() {
    hoverMarketPlace.classList.remove('hover-market-place');
    hoverProducts.classList.toggle('hover-products');
}
function hoverBox2() {
    hoverProducts.classList.remove('hover-products');
    hoverMarketPlace.classList.toggle('hover-market-place');
}

let hoverLi = Array.from(document.querySelector('.list').firstElementChild.children);
let listImg = document.querySelector('.list-img').firstElementChild;
hoverLi.forEach(e => {
    e.addEventListener('mouseover', () => {
        let text = e.firstElementChild.textContent.toLocaleLowerCase();
        listImg.setAttribute('src', `img/items/${text}.png`);
    });
})