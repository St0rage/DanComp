// SLIDE-SHOW BANNER
let banIndex = 0;
waktuBan();

function banButton(n) {
    banIndex += n;
    let ban = document.querySelectorAll('.banner');
    if(banIndex < 1) {banIndex = ban.length}
    if(banIndex > ban.length) {banIndex = 1}
    for(let i = 0; i < ban.length; i++) {
        ban[i].style.display = "none";
    }
    ban[banIndex-1].style.display = 'block';
    clearTimeout(ulang);
}

function waktuBan(n) {
    let ban = document.querySelectorAll('.banner');
    for(let i = 0; i < ban.length; i++) {
        ban[i].style.display = "none";
    }
    banIndex++;
    if (banIndex > ban.length) {banIndex = 1} 
    ban[banIndex-1].style.display = 'block';
    let ulang = setTimeout(waktuBan, 5000);
}

// SLIDE-SHOW PRODUCTS
let itemIndex = 1;
waktuItem(itemIndex);

function itemButton(n) {
    waktuItem(itemIndex += n);
}

function waktuItem(n) {
    let item = document.querySelectorAll('.item');
    for(let i = 0; i < item.length; i++) {
        item[i].style.display = "none";
    }
    if (itemIndex == 1) {
        document.querySelector('.pro-prev').style.display = "none";
    } else {
        document.querySelector('.pro-prev').style.display = "block";
    }
    
    if (itemIndex == item.length) {
        document.querySelector('.pro-next').style.display = "none";
    } else {
        document.querySelector('.pro-next').style.display = "block";
    }
    item[itemIndex-1].style.display = 'flex';
}

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