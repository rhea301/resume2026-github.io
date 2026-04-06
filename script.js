// typing
let words = ["AI Enthusiast", "Developer", "Problem Solver"];
let i=0,j=0,current="";
let el=document.querySelector(".typing");

function type(){
 if(j<words[i].length){
  current+=words[i][j];
  el.innerHTML=current;
  j++;
  setTimeout(type,80);
 } else {
  current=""; j=0; i=(i+1)%words.length;
  setTimeout(type,500);
 }
}
type();

// scroll animation
let elements=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
 elements.forEach(el=>{
  let pos=el.getBoundingClientRect().top;
  if(pos<window.innerHeight-100){
    el.classList.add("show");
  }
 });
});

// popup
function openImage(src){
 document.getElementById("popup").style.display="flex";
 document.getElementById("popup-img").src=src;
}

function closeImage(){
 document.getElementById("popup").style.display="none";
}
