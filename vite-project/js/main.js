import {albums} from '../js/albums'
import '../css/album.css'

 document.querySelector(".button").addEventListener("click", function(){
  if(document.body.classList.contains("dark")){
    document.body.classList.add("light");
     document.body.classList.remove("dark");
   } else{
    document.body.classList.add("dark")
    document.body.classList.remove("light")
   }
 });
 document.querySelector(".pop").addEventListener("click", function(){
    if(document.body.classList.contains("indiepop","rnb")){
      document.body.classList.add("pop");
       document.body.classList.remove("indiepop","rnb");
     } else{
      document.body.classList.remove("pop");
     }
   });
/*  document.querySelector('body').onclick = (e) => {
   document.forEach(e => {
    console.log(albums)
   });
 }  */
 console.log(albums)