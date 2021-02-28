'use strict';

//select elements chuck them in variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//have to use querySelectorAll to get node list similar to an array
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for(let i = 0; i< btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textConent);
    
}