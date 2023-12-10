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
  function clearFields(){
    DOMselectors.container.innerHTML= "";
  }
  document.querySelector(".theme").addEventListener("click", function(){
    if(document.body.classList.contains("dark")){
      document.body.classList.add("light");
       document.body.classList.remove("dark");
     } else{
      document.body.classList.add("dark")
      document.body.classList.remove("light")
     }
   });
  DOMselectors.pop.addEventListener("click", function () {
  clearFields(); 
  const printpop = albums.filter((album) => album.genre === "pop");
printpop.forEach(s => 
        DOMselectors.container.insertAdjacentHTML("afterend", `
        <div class="card">
      <h2 class="albumname"> ${s.name}</h2>
      <h2 class="artistname"> ${s.artist}</h2>
      <img src="${s.image}" alt="" class="image">
      <h3 class="price">${s.price}</h3>
  </div>
        
        `))
   });
   DOMselectors.indiepop.addEventListener("click", function () {
    clearFields(); 
  const printindie = albums.filter((album) => album.genre === "indiepop");
  printindie.forEach(a => 
        DOMselectors.container.insertAdjacentHTML("afterend", `
        <div class="card">
      <h2 class="albumname"> ${a.name}</h2>
      <h2 class="artistname"> ${a.artist}</h2>
      <img src="${a.image}" alt="" class="image">
      <h3 class="price">${a.price}</h3>
  </div>
        
        `))
   });
      
   DOMselectors.rnb.addEventListener("click", function () {
    clearFields(); 
  const printrnb = albums.filter((album) => album.genre === "rnb");
  printrnb.forEach(d => 
        DOMselectors.container.insertAdjacentHTML("afterend", `
        <div class="card">
      <h2 class="albumname"> ${d.name}</h2>
      <h2 class="artistname"> ${d.artist}</h2>
      <img src="${d.image}" alt="" class="image">
      <h3 class="price">${d.price}</h3>
  </div>
        
        `))
   });
  function addcards (arr){
    arr.forEach((m) => {
      DOMselectors.container.insertAdjacentHTML("afterend", 
      `<div class="card">
      <h2 class="albumname"> ${m.name}</h2>
      <h2 class="artistname"> ${m.artist}</h2>
      <img src="${m.image}" alt="" class="image">
      <h3 class="price">${m.price}</h3>
  </div>`
  )})}
  
addcards(albums)
clearFields();


 /*
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
clearFields();
let buttons = document.querySelectorAll(".pop, .indiepop, .rnb");

buttons.forEach((button) => button.addEventListener("click", function(){
  let type = button.textContent;
  let newArr = albums.filter((album) => album.genre === type);
  addcards(newArr);
  clearFields();
})); */
/*   DOMselectors.container.addEventListener("click", clear(){
  clearscreen();
  //addcards(albums)
});  */

