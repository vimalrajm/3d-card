const container = document.querySelector('.container');
const card = document.querySelector('.card');
const img = document.querySelector('img')

container.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 10;
    const y = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    img.style.transform = 'translateZ(200px)';
})

container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = '0.5s ease-in-out';
    img.style.transform = 'translateZ(0px)';
    img.style.transition = '0.5s ease-in-out';
})

container.addEventListener('mouseenter', (e) => {
    card.style.transition = '0s ease-in-out';
    img.style.transition = '0s ease-in-out';
})