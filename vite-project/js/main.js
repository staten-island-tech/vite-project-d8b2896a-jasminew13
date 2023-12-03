import { albums } from '../js/albums'
import '../css/album.css'
import { DOMselectors } from '../js/dom'
//import {lightthings} from './albums'
/* import '../css/style.css'
import {popalbums} from '../js/albums'
import {indiepop} from '../js/albums'
export {rnb} from '../js/albums'
import '../css/album.css' */

/* console.log(lightthings);
document.querySelector('body').onclick = (e) => {
  console.log(popalbums)
} */
 /* DOMselectors.form.addEventListener('submit', function (ok) {
  ok.preventDefault(); console.log(DOMselectors)*/
 function clearscreen(){
  DOMselectors.container.innerHTML= ``;
}

  function addcards (arr){
    arr.forEach((s) => {
      DOMselectors.container.insertAdjacentHTML("afterend", 
      `<div class="card">
      <h2 class="albumname"> ${s.name}</h2>
      <h2 class="artistname"> ${s.artist}</h2>
      <img src="${s.image}" alt="" class="image">
      <h3 class="price">${s.price}</h3>
  </div>`
  )})}
  
addcards(albums)
clearscreen();

let buttons = document.querySelectorAll(".pop, .indiepop, .rnb");

buttons.forEach((button) => button.addEventListener("click", function(){
  let type = button.textContent;
  let newArr = albums.filter((album) => album.genre === type);
  addcards(newArr);
  clearscreen();
}));
/*   DOMselectors.container.addEventListener("click", clear(){
  clearscreen();
  //addcards(albums)
});  */

document.querySelector(".theme").addEventListener("click", function(){
  if(document.body.classList.contains("dark")){
    document.body.classList.add("light");
     document.body.classList.remove("dark");
   } else{
    document.body.classList.add("dark")
    document.body.classList.remove("light")
   }
 });