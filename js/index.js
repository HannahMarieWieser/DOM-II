// Your code goes here


// nav[0].addEventListener('mouseover', function(cnav){
//     cnav.target.style.color = 'cyan';
//     cnav.stopPropagation();

//      setTimeout(function(){
//          cnav.target.style.color = '';
//      }, 300);
// });


const nav = document.querySelectorAll('nav a');
nav.forEach((navbut) => {
    navbut.addEventListener('mouseover', function(cnav){
    cnav.target.style.color = 'cyan';
    cnav.stopPropagation();
    cnav.preventDefault()

    setTimeout(function(){
        cnav.target.style.color = '';
    }, 300);
    })
});



const topbar = document.querySelector
('.main-navigation');
const pagebody = document.querySelector('body');

pagebody.addEventListener('wheel', function(){
    topbar.style.backgroundColor = 'transparent';
});

pagebody.addEventListener('mousedown', function(){
    topbar.style.backgroundColor = 'white';
});





//display none will remove image completely
//visibility hidden will hide but keep format
const sqimg = document.querySelectorAll('.img-content');

sqimg.forEach((hideimg) => {
    hideimg.addEventListener('mousedown', () => {
    hideimg.style.visibility = 'hidden';
    })
});

sqimg.forEach((showimg) => {
    showimg.addEventListener('mouseout', () => {
    showimg.style.visibility = 'visible';
    })
});



const hightext = document.querySelector('body');
console.log(hightext)
hightext.addEventListener('copy', () => {
    alert('Copyright Funbus 2018')
});



const backgray = document.querySelector('body');
backgray.addEventListener('keydown', () => {
    backgray.style.backgroundColor = 'rgb(255,240,245)'
});
backgray.addEventListener('dblclick', () => {
    backgray.style.backgroundColor = 'white'
});


// const dontleave = document.querySelector('body');
// console.log(dontleave)
window.addEventListener('load', () => {
    alert('The page has loaded')
})