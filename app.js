const download = document.querySelector('#download');
const headerLogo = document.querySelector('#header-logo');

let deg = 0;
let cw;
let countRot;

download.addEventListener('click', () => {
  countRot = 0;
  countRot += 1;
  deg += 70;
  cw = true;
  headerLogo.style.transitionDuration = '1s';
  headerLogo.style.transform = `rotate(${deg}deg)`;
});

headerLogo.addEventListener('transitionend', () => {
  if (cw && countRot < 3) {
    countRot += 1;
    deg -= 15;
    console.log({ countRot, deg });
    headerLogo.style.transitionDuration = '0.5s';
    headerLogo.style.transform = `rotate(${deg}deg)`;
    cw = false;
  } else if (!cw && countRot < 3) {
    countRot += 1;
    deg += 5;
    headerLogo.style.transitionDuration = '0.5s';
    headerLogo.style.transform = `rotate(${deg}deg)`;
    cw = true;
  }
});
