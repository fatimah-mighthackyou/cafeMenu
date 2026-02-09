function filterItems(category){
    const items= document.querySelectorAll('.item');
    const buttons = document.querySelectorAll('.cat');

    items.forEach(item => {
        if(item.dataset.category === category){ item.style.display = "flex";}
        else {
            item.style.display = "none";
        }
    });

    buttons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.querySelector(`.cat.${category}`);
    if (activeBtn) activeBtn.classList.add('active');
}

function openModal(item){
    document.getElementById('modal').style.display="flex";
    document.getElementById('modal-img').src=item.dataset.img;
    document.getElementById('modal-title').textContent=item.dataset.title;
    document.getElementById('modal-desc').textContent=item.dataset.desc;
    document.getElementById('modal-price').textContent=item.dataset.price;
}

function closeModal(){
    document.getElementById('modal').style.display="none";
}

window.onload = function(){
    window.scrollTo(0,0);
    filterItems('seasonal');
}