let nnmber=document.querySelector(".number-guesser")
let input=document.querySelector(".input")
let button=document.querySelector(".button")
let text=document.querySelector(".text")
let body=document.querySelector("body")
let result=document.querySelector(".result")




function guess(){
   result.textContent=""
    
    let random=Math.floor(Math.random()*9)+1
    //console.log(random)
   let v=input.value
   //console.log(v)
    if(v.length==1){
        //console.log(v.length)
        console.log("Inpu number"+"(" +v+")" +"")
        console.log("Gussing number"+"(" +random +")" +"")
        if(v==random){
            console.log("the gussing is right")
            pt=document.createElement("p")
            pt.className="text"
            pt.style.backgroundColor="green"
            pt.textContent="Correct guess"
            result.appendChild(pt)
            input.value=""
            
            pg=document.createElement("p")
            pg.className="guess"
            pg.style.backgroundColor="#0021d9"  
            pg.textContent="Your guess is " + "(" +v+ ")"
            result.appendChild(pg)
            
            
            pc=document.createElement("p")
            pc.className="computer"
            pc.style.backgroundColor="#0021d9"
            pc.textContent="Computer's guess is " + "(" +random+ ")"
            result.appendChild(pc)
            
            
     
            
        }
        else{
            console.log("the gussing isn't right")
           pt=document.createElement("p")
           pt.className="text"
           pt.style.backgroundColor="red"
           
           pt.textContent="Incorrect guess"           
           result.appendChild(pt)
           input.value=""
           
           pg=document.createElement("p")
           pg.className="guess"
           pg.style.backgroundColor="#0021d9"  
           pg.textContent="Your guess is " + "(" +v+ ")"
           result.appendChild(pg)
           
           
           pc=document.createElement("p")
           pc.className="computer"
           pc.style.backgroundColor="#0021d9"
           pc.textContent="Computer's guess is " + "(" +random+ ")"
           result.appendChild(pc)

        }
       }
       else{
        alert("please enter just one number")
        input.value=""
        
       }

}




button.addEventListener("click",guess)