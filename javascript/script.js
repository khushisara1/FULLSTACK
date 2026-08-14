const heading = document.querySelector("h1");
const button1 = document.querySelector("#hye");
const button2 = document.querySelector("#bye");
const name = document.querySelector("#nameInput");
button1.addEventListener("click" ,function(){
    heading.textContent = "Hello "+name.value+"!";
});
button2.addEventListener("click" ,function(){
    heading.textContent = "GoodBye "+name.value+"!";
});
