import './style.css'
import { setupCounter } from './counter.js'

document.querySelector(".change").addEventListener("click", function(){
  if(document.body.classList.contains("light")){
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else{
    document.body.classList.add("light")
    document.body.classList.remove("dark")
  }
});

setupCounter(document.querySelector('#counter'))
