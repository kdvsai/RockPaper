let choices = document.querySelectorAll(".choice");
let user=0;
let computer=0;
choices.forEach((ch)=>{
   ch.addEventListener("click",(e)=>{
    let userChoice =ch.getAttribute("id");
    Play(userChoice);
   })
})
let values=["rock","paper","scissors"];
const Play=(userChoice)=>{
    let msg = document.querySelector("#msg");
    let rnd = Math.floor(Math.random()*values.length);
    let compChoice=values[rnd];
    if(userChoice==="rock"&&compChoice==="scissors" 
    || userChoice==="paper"&&compChoice==="rock"
    ||userChoice==="scissors"&&compChoice==="paper"){
        user++;
        document.querySelector("#yourscore").innerText=user;
        msg.innerText=`You won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else if(userChoice==compChoice){
        msg.innerText="It was Draw.";
        msg.style.backgroundColor="#808080"
    }
    else{
        computer++;
        document.querySelector("#compscore").innerText=computer;
        msg.innerText=`You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    
    } 
}