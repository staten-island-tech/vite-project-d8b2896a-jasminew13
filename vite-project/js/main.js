import { albums } from '../js/albums'
import '../css/album.css'
import { DOMselectors } from '../js/dom'

 document.querySelector(".theme").addEventListener("click", function(){
  if(document.body.classList.contains("dark")){
    document.body.classList.add("light");
     document.body.classList.remove("dark");
   } else{
    document.body.classList.add("dark")
    document.body.classList.remove("light")
   }
 });

 /* DOMselectors.form.addEventListener('submit', function (ok) {
  ok.preventDefault(); console.log(DOMselectors)*/
 
  function addcards (arr){
    arr.forEach((s) => {
      DOMselectors.container.insertAdjacentHTML("afterend", 
      `<div class="card">
      <h2 class="albumname"> ${s.name}</h2>
      <h2 class="artistname"> ${s.artist}</h2>
      <img src="${s.image}" alt="" class="image">
      <h3 class="price">${s.price}</h3>
  </div>`
  )})};
  
addcards(albums)

function clearscreen(){
  const clear = document.querySelector(".container");
  clear.container.innerHTML = ""
};

let buttons = document.querySelectorAll(".pop, .indiepop, .rnb");

buttons.forEach((button) => button.addEventListener("click", function(){
  let type = button.textContent;
  let newarr = albums.filter((album) => album.genre === type);
  clearscreen();
  addcards(newarr);
}));

DOMselectors.container.addEventListener("click", function(){
  clearscreen();
  addcards(albums)
});