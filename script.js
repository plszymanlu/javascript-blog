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

const links = document.querySelectorAll('.titles a');

for(let link of links){
  console.log(link);
}

'use strict';
function titleClickHandler(event){
    console.log('Link was clicked!');

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClicHandler);
}

/* remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}

/* remove class 'active' from all articles */

const activeArticles = document.querySelectorAll('.titles a.active');

for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}

}