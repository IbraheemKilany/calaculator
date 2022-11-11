
let btnno=document.getElementsByClassName("btnno")
let eq=document.getElementById("eq")
let clear=document.getElementById("clear")
clear.onclick=function(){

eq.innerHTML="";

}
for(let i=0;i<btnno.length;i++){


    btnno[i].onclick = function(){
        //ه
        let lastChar =eq.innerHTML[eq.innerHTML.length-1];
        //اذا كان الحرف الي دخلته رقم
        if(!isOpertor(this.innerHTML)){
           eq.innerHTML += this.innerHTML;
        }
        else if(this.innerHTML == "=" && !isOpertor(lastChar)){
            eq.innerHTML = eval(eq.innerHTML)
        }

        //اذا كان الحرف الي دخلته مش رقم
        else{
            //اذا كان اخر حرف رقم 
            if(!isOpertor(lastChar)){
                eq.innerHTML += this.innerHTML;

            }
            
        }
    }
    

}

function isOpertor(operator){
    if(operator.length==1){
        return operator=='+' || operator=='-' || operator=='*' || operator=='/' || operator=='=' 
    }
    return false;
}

