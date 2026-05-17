const schemeSvg = document.querySelector('.scheme-svg')
let cost = 800;
let totalPrice = 0
const menuBtn = document.querySelector('.m-menu')
const menu = document.querySelector('.menu')
const totalPriceTag = document.querySelector('.price-total')
schemeSvg.addEventListener('click', (e)=>{
    if (e.target.classList.contains('booked')) {
        alert('Это место занято')
    }else {
        e.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length
        totalPrice = cost * totalSeats
    }
    totalPriceTag.textContent = totalPrice
})

menuBtn.addEventListener('click', ()=>{
    console.log('click')
    menu.classList.toggle('is-open')

})