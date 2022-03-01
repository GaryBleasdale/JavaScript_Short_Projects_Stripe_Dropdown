import { sublinks } from './data.js';

let menuBtn=document.querySelectorAll('.menubtn');


// First Menu Button
let menuBtn1 = document.createElement('div')
menuBtn1.classList.add('dropdown')
menuBtn1.classList.add('dropdown1')
menuBtn1.innerHTML = `
<i class="${sublinks[0].links[0].icon}"></i><span>${sublinks[0].links[0].label}</span>
<i class="${sublinks[0].links[1].icon}"></i><span class='innertext'>${sublinks[0].links[1].label}<span class="diamondtop"></span></span>
<i class="${sublinks[0].links[1].icon}"></i><span>${sublinks[0].links[2].label}</span>

`
menuBtn[0].appendChild(menuBtn1)
console.log(menuBtn[0])



menuBtn[0].addEventListener('mouseover', appear1);
menuBtn[0].addEventListener('mouseleave', disappear1);


function appear1(){
  menuBtn1.style.display="flex"
}

function disappear1(){
if (menuBtn1.style.display==="none"){
  menuBtn1.style.display="flex"
} else {
  menuBtn1.style.display="none"
}

}

// Second Menu Button
let menuBtn2 = document.createElement('div')
menuBtn2.classList.add('dropdown')
menuBtn2.classList.add('dropdown2')
menuBtn2.innerHTML = `
<i class="${sublinks[1].links[0].icon}"></i><span>${sublinks[1].links[0].label}</span>
<i class="${sublinks[1].links[1].icon}"></i><span>${sublinks[1].links[1].label}<span class="diamondtop2"></span></span>
<i class="${sublinks[1].links[2].icon}"></i><span>${sublinks[1].links[2].label}</span>
`
menuBtn[1].appendChild(menuBtn2)




menuBtn[1].addEventListener('mouseover', appear2);
menuBtn[1].addEventListener('mouseleave', disappear2);

function appear2(){
  menuBtn2.style.display="flex"
}

function disappear2(){
  menuBtn2.style.display="none"

}


// Third Menu Button

let menuBtn3 = document.createElement('div')
menuBtn3.classList.add('dropdown')
menuBtn3.classList.add('dropdown3')
menuBtn3.innerHTML = `
<i class="${sublinks[2].links[0].icon}"></i><span>${sublinks[2].links[0].label}</span>
<i class="${sublinks[2].links[1].icon}"></i><span>${sublinks[2].links[1].label}<span class="diamondtop3"></span></span>
`
menuBtn[2].appendChild(menuBtn3)




menuBtn[2].addEventListener('mouseover', appear3);
menuBtn[2].addEventListener('mouseleave', disappear3);

function appear3(){
  menuBtn3.style.display="flex"
}

function disappear3(){
  menuBtn3.style.display="none"

}

menuBtn=document.querySelectorAll('.menubtn');
console.log(menuBtn)


//hamburger-menu

let hamburger = document.body.querySelector('.fa-bars');
let xMark = document.body.querySelector('.fa-xmark');
let body = document.body;
let modal = document.body.querySelector('.modal')
let afterCSS= window.getComputedStyle(body,'::before')

let modalContent = document.createElement('div');
modalContent.innerHTML=`
<div>${sublinks[0].page}</div>
<i class="${sublinks[0].links[0].icon}"></i><span>${sublinks[0].links[0].label}</span>
<i class="${sublinks[0].links[1].icon}"></i><span class='innertext'>${sublinks[0].links[1].label}</span>
<i class="${sublinks[0].links[1].icon}"></i><span>${sublinks[0].links[2].label}</span>
<div>${sublinks[1].page}</div>
<i class="${sublinks[1].links[0].icon}"></i><span>${sublinks[1].links[0].label}</span>
<i class="${sublinks[1].links[1].icon}"></i><span>${sublinks[1].links[1].label}</span>
<i class="${sublinks[1].links[2].icon}"></i><span>${sublinks[1].links[2].label}</span>
<div>${sublinks[2].page}</div>
<i class="${sublinks[2].links[0].icon}"></i><span>${sublinks[2].links[0].label}</span>
<i class="${sublinks[2].links[1].icon}"></i><span>${sublinks[2].links[1].label}</span></span>
`

modal.appendChild(modalContent)



hamburger.addEventListener('click', openHam)
xMark.addEventListener('click',closeX)


function openHam(){
  modal.style.display = 'block'
  body.style.setProperty('--afterBack','block')
  console.log('test')
}

function closeX(){
  modal.style.display ='none';
  body.style.setProperty('--afterBack','none')
}

window.onresize = displayWindowSize;

function displayWindowSize(){
  if(window.innerWidth>750){
    modal.style.display='none';
    body.style.setProperty('--afterBack','none')
  }
}


