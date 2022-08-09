const submitCA = document.querySelector('.submit-ca');
const selectText = document.querySelector('.selection-text');
const mainContent = document.querySelector('.main-content');
const thankyouContent = document.querySelector('.thankyou-content');
const buttons = document.querySelectorAll('button');
const rt = document.querySelector(':root');
const clickedColor = getComputedStyle(document.documentElement).getPropertyValue('--lightGrey');
let value = 0;
submitCA.addEventListener('click', thankyouState);
console.log(clickedColor);


function thankyouState(){
    selectText.innerText = 'You selected ' + value + ' out of 5';
    mainContent.classList.add('inactive');
    thankyouContent.classList.remove('inactive');

}

buttons.forEach((el, i) => {
    el.addEventListener('click', () => {
        value = i + 1;
        el.style.backgroundColor = clickedColor;
        el.style.color = 'white';
    })
})