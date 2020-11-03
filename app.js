const card = document.querySelector('.card')
const container = document.querySelector('.container')

//items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.description')
const sizes = document.querySelector('.sizes')
const btn = document.querySelector('.purchase button')
const info = document.querySelector('.info')
const btnTxt = document.querySelectorAll('.sizes button')
const price = document.querySelector('.info p')


//moving
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    //popout

    //font-weight
    price.style.fontWeigth = 'bold'
    //bg-color
    btn.style.background = '#BF4539'
    //color
    title.style.color = '#BF4539';
    description.style.color = '#BF4539';
    btnTxt.forEach(e => {
         e.style.color = '#BF4539';
    });
    //z-index
    title.style.transform = 'translateZ(150px)';
    price.style.transform = 'translateZ(125px) ';
    sneaker.style.transform = 'translateZ(200px)';
    purchase.style.transform = 'translateZ(175px)';
    description.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(80px)';
})

//animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popout

    //bg-color
    btn.style.background = '#732F2F'
    //color
    title.style.color = ' #732F2F';
    description.style.color = '#732F2F';
    btnTxt.forEach(e => {
        e.style.color = '#732F2F';
   });
    //z-index
    title.style.transform = 'translateZ(0px)'
    price.style.transform = 'translateZ(0px) ';
    sneaker.style.transform = 'rotateZ(0deg)'
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';

})