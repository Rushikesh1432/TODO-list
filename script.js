let btn=document.getElementById("input");
let lst=document.querySelector('.to');
let ip=document.getElementById("hi");
let log=document.querySelector(".log");


btn.addEventListener('click',()=>{

    if(ip.value.trim() !=""){ 

    let temp=document.createElement('li');
    let b=document.createElement("button");

    temp.innerText=ip.value;
    b.innerText=" ❌";
    temp.append(b);
    lst.append(temp);

    b.style.marginLeft="85%";
    log.innerText=log.innerText+ip.value+" ✔ added \n";

    ip.value="";
    
    b.addEventListener('click',()=>{
        lst.removeChild(temp);
        log.innerText=log.innerText+temp.innerText+" removed \n";
    })





}})

