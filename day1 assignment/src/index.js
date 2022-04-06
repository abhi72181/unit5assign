
import "./index.css"
  import {sub} from "./note"
  import photo from "./logos/notes.jpeg"
  // console.log(note())

// let notes=document.querySelector("#notes")
// notes.innerHTML=note()
// var notes=document.querySelector("#notes")
var logo=document.querySelector("#logo")
let image=document.createElement("img")
image.src=photo
logo.append(image)
document.querySelector("button").addEventListener("click",note)
function note(){
  document.querySelector("#notes").textContent=sub()
}

// function sub(){
//   let values=document.querySelector("#make").value
//   document.querySelector("#notes").textContent=values
// }
// console.log(buttons)

