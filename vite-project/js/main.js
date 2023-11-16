import {popalbums} from '../js/albums'
import {indiepop} from '../js/albums'
export {rnb} from '../js/albums'
import '../css/album.css'

// document.querySelector(".btn").addEventListener("click", function(){
//   if(document.body.classList.contains("dark")){
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//   } else{
//     document.body.classList.add("light")
//     document.body.classList.remove("dark")
//   }
// });
document.querySelector('body').onclick = (e) => {
  console.log(popalbums)
}