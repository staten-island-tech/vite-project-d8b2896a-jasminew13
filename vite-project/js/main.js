import { albums } from '../js/albums'
import '../css/album.css'
import { DOMselectors } from '../js/dom'

function clearfields(){
  DOMselectors.container.innerHTML="";
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

 /* DOMselectors.form.addEventListener('submit', function (ok) {
  ok.preventDefault(); */
 //console.log(DOMselectors)
  function addcards (arr){
    arr.forEach((s) => {
      DOMselectors.container.insertAdjacentHTML("afterend", 
      `<div class="card">
      <h2 class="albumname"> ${s.name}</h2>
      <h2 class="artistname"> ${s.artist}</h2>
      <img src="${s.image}" alt="" class="image">
      <h3 class="pricing">${s.price}</h3>
  </div>`
  )})};
  
addcards(albums);

let buttons = document.querySelectorAll(".pop, .indiepop, .rnb")
buttons.forEach((btn) => btn.addEventListener("click", function(){
  let type = btn.textContent
  let newArr = albums.filter((album) => album.genre === type)
  clearfields();
  addcards(newArr);
  addcards(albums);
}))
/* DOMselectors.buttons.addEventListener("click", function(){
  clearfields();
}) */
