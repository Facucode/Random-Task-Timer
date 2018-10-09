
function colon(x){
    input=document.querySelector(".input1");
    if(input.value.length==2){
        x.value+=":";

        
    }
}
    

let timer=document.querySelector(".screen1__header h2");


let buttons=document.querySelectorAll("button");
let regex = /(\d+)/g;

for(let i=0;i<4;i++){
        buttons[i].addEventListener('click',function(){
        let time = `0${buttons[i].innerHTML.match(regex)}:00`;
        timer.innerHTML=time;
    })           
}

let customize=document.querySelector(".customize");
customize.addEventListener('click',function(){
    document.querySelector(".screen1__header").innerHTML="<h1>¿Cuanto tiempo vas a trabajar hoy?</h1><input type=\"text\" class=\"input1\" onkeypress=\"colon(this)\" maxlength=\"5\">";
    document.querySelector("input").focus();
})

let next = document.querySelector(".next__h2");
next.addEventListener('click',function(){
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "block";
})

let prev = document.querySelector("#b1");
prev.addEventListener('click',function(){
    document.getElementById("s2").style.display = "none";
    document.getElementById("s1").style.display = "block";    
})

let next2 = document.querySelector("#b2");
next2.addEventListener('click',function(){
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "block";
})

let prev2 = document.querySelector("#b3");
prev2.addEventListener('click',function(){
    document.getElementById("s3").style.display = "none";
    document.getElementById("s2").style.display = "block";
})




