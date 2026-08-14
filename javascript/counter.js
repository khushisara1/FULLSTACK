console.log("JavaScript connected!");
const counter = document.querySelector("#count");
const button1 = document.querySelector("#B1");
const button2 = document.querySelector("#B2");
const reset = document.querySelector("#reset");
let val= 0;
button1.addEventListener("click", function(){
    val+=1;
    counter.textContent=val;
});

button2.addEventListener("click", function(){
    val-=1;
    counter.textContent=val;
});

reset.addEventListener("click", function(){
    val=0;
    counter.textContent=val;
});