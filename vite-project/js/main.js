import {albums} from '../js/albums'
import '../css/album.css'
import {DOMselectors} from '../js/dom'

 document.querySelector(".button").addEventListener("click", function(){
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
 console.log(DOMselectors)
  function addcards (arr){
    DOMselectors.forEach(albums =>(
      DOMselectors.container.insertAdjacentHTML("afterend", `
      <div class="container"><div class="card">
  <img class="card-img" src= ${DOMselectors.image.value}></img>
  <p class="albumname">${DOMselectors.albumname.value}</p>
  <p><h2 class="artist">${DOMselectors.artistname.value}</h2></p>
  <p class="price">${DOMselectors.price.value}</p>
  </div>)}</div>`
  ) 
    ))
 };
  
addcards(albums);
 
let buttons = document.querySelectorAll('#btn')
buttons.forEach((btn) => btn.addEventListener("click", function(){
  let type = btn.textContent.toLowerCase()
  let newArr = albums.filter((album) => album.genre == type)
  clearfields();
  cards(newArr)
}))
