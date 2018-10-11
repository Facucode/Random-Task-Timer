

let timer=document.querySelector(".screen1__header h2");
let buttons=document.querySelectorAll("button");
let regex = /(\d+)/g;
let input = false;


function colon(x){
    input=document.querySelector(".input1");
    if(input.value.length==2){
        x.value+=":";

        
    }
}


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
    let input = true;
})

let next = document.querySelector(".next__h2");
next.addEventListener('click',function(){
    if(timer.innerHTML!="00:00" || (input && document.querySelector(".input1").value!=""))
    {
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "block";
    }
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
    // Se fija si tiene el header comun o el input y lo introduce en la pagina 3
    document.querySelector(".screen3 .screen2__header h1").innerHTML= input ?  document.querySelector(".input1").value : timer.innerText;

})

let prev2 = document.querySelector("#b3");
prev2.addEventListener('click',function(){
    document.getElementById("s3").style.display = "none";
    document.getElementById("s2").style.display = "block";
})




