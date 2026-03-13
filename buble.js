var sec=4;
var hno=0;
var score=0;
let nam=document.getElementById("name");
let span=document.getElementById("er");
 span.style.color="red";
 span.style.fontWeight="1px";
 span.style.fontSize="15px";
 span.style.position="absolute";
 
//  span.innerText="";


function clik(){
    console.log(typeof nam.value);
if(nam.value===""){
    // alert("Enter Your Name");
    span.textContent="Enter Your Name";
    nam.value="";
}
else if(!isNaN(nam.value)){
    // alert("Enter Your Name Not Number");
     span.textContent="Enter Your Name Not Number";
     nam.value="";
}
else{
    start();
    span.innerText="";
}
}

function start(){
  let btn =document.getElementById("ful").style.display="none";
  timer();
   newhit();
   makebuble();
}

function newhit(){
   hno=Math.floor(Math.random()*10);
  document.getElementById("sethit").innerHTML=hno;
}

function makebuble()
{var clutter="";
for(let i=1;i<=256;i++)
{ let rn= Math.floor(Math.random()*10);
    clutter +=`<div class="bubl">${rn}</div>`;
}
document.getElementById("ptbtm").innerHTML=clutter
} 
// high score and player name:
let heiestscore=localStorage.getItem("hscore") || 0;               
let heiestname=localStorage.getItem("hname") || " ";
 heiestscore=parseInt(heiestscore) ;
 function checkscore(newscore){
if(heiestscore<newscore){
   heiestname=nam.value;
   localStorage.setItem("hname",heiestname);
   localStorage.setItem("hscore",newscore);
   heiestscore=localStorage.getItem("hscore");
}
 }
// timer fxn
function timer(){
  var showtime=setInterval(() => {
   if(sec>=0){
       document.getElementById("settim").innerHTML=sec;
       sec--;
}
else{
    clearInterval(showtime);
    checkscore(score);
    document.getElementById("ptbtm").innerHTML=`
    <div class="result">
        <h3>YOUR SCORE: ${score}</h3>
        <h3>HIGH SCORE: ${heiestscore}</h3>
        <h3>PLAYER NAME: ${heiestname}</h3>
        <button class="btn" onclick="restart()">RESTART</button>
    </div>
     
    ` 
    
}
}, 1000);
}
 
let ptbtm=document.getElementById("ptbtm")
ptbtm.addEventListener("click",function(dets){
    var elem=dets.target;
    var clickno=Number(dets.target.textContent);
 if(hno===clickno){
    score=score+10;
    document.getElementById("setsr").innerHTML=score;
    newhit();
    makebuble();
    elem.style.backgroundColor="green";
 }
})
 // restart btn
 function restart(){
//    window.location.href="/game";
location.reload();
}


