// // SLIDE-SHOW BANNER
// let banIndex = 0;
// waktuBan();

// function banButton(n) {
//     banIndex += n;
//     let ban = document.querySelectorAll('.banner');
//     if(banIndex < 1) {banIndex = ban.length}
//     if(banIndex > ban.length) {banIndex = 1}
//     for(let i = 0; i < ban.length; i++) {
//         ban[i].style.display = "none";
//     }
//     ban[banIndex-1].style.display = 'block';
//     clearTimeout(ulang);
// }

// function waktuBan(n) {
//     let ban = document.querySelectorAll('.banner');
//     for(let i = 0; i < ban.length; i++) {
//         ban[i].style.display = "none";
//     }
//     banIndex++;
//     if (banIndex > ban.length) {banIndex = 1} 
//     ban[banIndex-1].style.display = 'block';
//     let ulang = setTimeout(waktuBan, 5000);
// }

// // SLIDE-SHOW PRODUCTS
// let itemIndex = 1;
// waktuItem(itemIndex);

// function itemButton(n) {
//     waktuItem(itemIndex += n);
// }

// function waktuItem(n) {
//     let item = document.querySelectorAll('.item');
//     for(let i = 0; i < item.length; i++) {
//         item[i].style.display = "none";
//     }
//     if (itemIndex == 1) {
//         document.querySelector('.pro-prev').style.display = "none";
//     } else {
//         document.querySelector('.pro-prev').style.display = "block";
//     }
    
//     if (itemIndex == item.length) {
//         document.querySelector('.pro-next').style.display = "none";
//     } else {
//         document.querySelector('.pro-next').style.display = "block";
//     }
//     item[itemIndex-1].style.display = 'flex';
// }

// AJAX
$.ajax({
	url: '../../data/products.txt',
	success: (result) => {
		let data = JSON.parse(result);
    let processor = data.processor;
    let cards = '';
    processor.forEach(m => {
      cards += showCards(m);
    });
    $('.inside').html(cards);
    console.log(processor);
	},
	error: (e) => {
		console.log(e.responseText);
	}
});




function showCards(m) {
  return `<div class="items">
            <img src="${m.gambar}" width="150" height="150">
            <span>${m.nama}</span>
            <div class="market-place">
                <a href="${m.tokped}">
                  <img src="../../img/logo/tokped2.png" width="40">
                </a>
                <a href="${m.shopee}">
                    <img src="../../img/logo/shoppe2.png" width="40">
                </a>
            </div>
          </div>`
}