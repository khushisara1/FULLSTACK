// WAP to create a timer for 15 minutes using setInterval and setTimeout . Display the passing time

var counter = 0;
setTimeout(()=>{
    setTimeout(()=>{
        counter+=1;
        console.log(counter+"seconds have passed");
    },1000);
},15*60);

const add = (a,b)=>{let c =a+b;return c;};
console.log(add(5,6));
