document.addEventListener('DOMContentLoaded', function(event) {
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuOverlay = document.querySelector('.menu__overlay'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menu.classList.remove('active');
    }
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//Smooth scrolling
let pageUp = document.getElementById('page_up');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        pageUp.style.display = 'block';
    } else {
        pageUp.style.display = 'none';
    }
}

function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Title animation
let textWrapper = document.querySelector('.promo__title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.promo__title .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 500 + 50 * i
  }).add({
    targets: '.promo__title .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1900,
    delay: (el, i) => 1000 + 50 * i
  });
});