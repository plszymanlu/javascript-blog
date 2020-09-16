'use strict';
function buttonClicked(buttonName){
    console.log(buttonName + ' został kliknięty');
}
function titleClickHandler(){
    buttonClicked('Test button');
}
const buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', titleClickHandler);

'use strict';
function titleClickHandler(){
    const links = document.querySelectorAll('.titles a');
    console.log(links);
}
const buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', titleClickHandler);