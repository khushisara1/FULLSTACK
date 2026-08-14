const counter = document.querySelector("#change");
const text = document.querySelector("#text");


text.addEventListener("input", function(){
    counter.textContent=text.value.length;
});