const heading = document.querySelector("h1");
const button1 = document.querySelector("#hye");
const button2 = document.querySelector("#bye");
const name = document.querySelector("#nameInput");
button1.addEventListener("click" ,function(){
    if(name.value===""){
        heading.textContent="Please enter your name!";
    }else{
        heading.textContent = "Hello "+name.value+"!";
    }
    
});
button2.addEventListener("click" ,function(){
    if(name.value===""){
        heading.textContent="Please enter your name!";
    }else{
        heading.textContent = "Bye  "+name.value+"!";
    }
});
