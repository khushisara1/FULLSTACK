function isArmstrong(n){
    let sum = 0;
    let ori = sum;
    let len = n.toSring().length;
    while(n>0){
        let digit = n%10;
        sum+=digit**len;
        n=Math.floor(n/10);
    }
    if(sum==ori){
        return true;
    }else{
        return false;
    }
}
function checkAndShow(){
    let val = document.getElementById("val").value;
    if(isArmstrong(val)){
        console.log("Armstrong Number");
    }else{
        console.log("Not Armstrong");
    }
}
// wap to store movie name with rating in a object list, display them on html using <ul> tag . perform crud operations.