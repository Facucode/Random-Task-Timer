
window.onload=function(){
    function colon(x){
        var regex=/^(2[0-3])|[01][0-9]$/;
        if(regex.test(x.value))
           x.value+=":";
     }
    

    let timer=document.querySelector(".header h2");


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
    document.querySelector(".header").innerHTML="<h1>¿Cuanto tiempo vas a trabajar hoy?</h1><input type=\"text\" onkeyup=\"colon(this)\">";
    document.querySelector("input").focus();
    })

   


}
