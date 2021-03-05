const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const links = document.querySelector('.navbar__links');
const toggleButton = document.querySelector('#mobile-menu');

// animation intro
function introAnimation() {
  const introBox = document.querySelector('.intro-box');
  const slider = document.querySelector('.slider');
  const tl = new TimelineMax();

  tl.fromTo(
    introBox,
    1,
    { height: '0%' },
    { height: '70%', ease: Power2.easeInOut }
  )
    .fromTo(
      introBox,
      1.2,
      { width: '100%' },
      { width: '80%', ease: Power2.easeInOut }
    )
    .fromTo(
      slider,
      1.2,
      { x: '-100%' },
      { x: '0%', ease: Power2.easeInOut },
      '-=1.2'
    )
    .fromTo(logo, 0.5, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, '-=0.5')
    .fromTo(links, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5');
}

function stickyNavigation() {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });
}

function openNavbar() {
  toggleButton.classList.toggle('close');
  links.classList.toggle('active');
}

function hideNavbar() {
  toggleButton.classList.toggle('close');
  links.classList.remove('active');
}

function render() {
  introAnimation();
  stickyNavigation();

  // 모바일에서 메뉴바 열기
  toggleButton.addEventListener('click', openNavbar);

  // 모바일에서 메뉴바 닫기
  links.addEventListener('click', hideNavbar);
}

render();
