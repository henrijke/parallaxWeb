const mouse = document.querySelector('#mouse');
const wrapper = document.querySelector('.wrapper');
const position = document.querySelector('#position');
const mouseCenter = document.querySelector('#mouse-center');
const positionCenter = document.querySelector('#positionCenter');
const auto = document.querySelector('#auto');
const pedestrian = document.querySelector('#pedestrian');
const scooter = document.querySelector('#scooter');

let coordX = 0;
let coordY = 0;
let centerX = mouseCenter.offsetLeft - coordX;
let centerY = mouseCenter.offsetTop - coordY;

wrapper.addEventListener('mousemove',(event)=>{
  coordX = event.clientX;
  coordY = event.clientY;
  position.innerHTML =` X:${coordX}  Y:${coordY}`;

  positionCenter.innerHTML = ` CenterX ${centerX} CenterY ${centerY}  `;
  auto.style.transform = 'translateX(' + centerX/100 + '%) translateY(' + centerY/100 + '%)';
  pedestrian.style.transform = 'translateX(' + coordX/100 + '%) translateY(' + coordY/100 + '%)';
  scooter.style.transform = 'translateX(' + coordX/100 + '%) translateY(' + coordY/100 + '%)';
});