import {albums} from '../js/albums'
import '../css/album.css'
import { DOMselectors} from '../js/dom'

 document.querySelector(".button").addEventListener("click", function(){
  if(document.body.classList.contains("dark")){
    document.body.classList.add("light");
     document.body.classList.remove("dark");
   } else{
    document.body.classList.add("dark")
    document.body.classList.remove("light")
   }
 });

 DOMselectors.form.addEventListener('submit', function (ok) {
  ok.preventDefault();
  console.log(DOMselectors.image.value, DOMselectors.artistname.value, DOMselectors.albumname.value)
 
  function cards (){
  DOMselectors.gallery.insertAdjacentHTML("afterend", `
  <div class="card">
  <img class="card-img" src= ${albums.image.value}></img>
  <p class="albumname">${albums.albumname.value}</p>
  <p><h2 class="artist">${albums.artistname.value}</h2></p>
  <p class="price">${albums.price.value}</p>
  </div>)}`);
  }});
cards()

let buttons = document.querySelectorAll('button')
buttons.forEach((btn) => btn.addEventListener("click", function(){
  let type = btn.textContent.toLowerCase()
  let newArr = albums.filter((album) => album.genre == type)
  cards(newArr)
}))
