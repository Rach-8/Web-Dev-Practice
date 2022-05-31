

var n= Math.floor((Math.random()*6)+1);
var m= Math.floor((Math.random()*6)+1);
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+n+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+m+".png");

if(n>m){
    document.querySelector("h1").textContent = "Player 1 won"
}
if(n<m){
    document.querySelector("h1").textContent = "Player 2 won"
}
if(n===m){
    document.querySelector("h1").textContent = "TIE"
}










