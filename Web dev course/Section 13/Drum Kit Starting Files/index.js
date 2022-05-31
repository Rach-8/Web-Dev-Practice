

var n = document.querySelectorAll(".drum").length; // gets length of the list of elements given by selector 
for(var i = 0;  i<n;  i++ ){ 
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick)}// adds event listener to all the buttons available





function handleclick(){
 var bt = this.innerHTML;  // use this to find out what button clicked when function called and then use innerhtml to ramove all code and that leaves us with only w/a/s/d etc and assign that to a var
 document.querySelector("."+bt).style.color = "white" // quary select the respective button pressed by putting bt as arguement and then change color to white
 btnani(bt)
 makeSound(bt)

}


// keyboard drum 

document.addEventListener("keypress", function(event){
    btnani(event.key)
    makeSound(event.key);

})



function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


        default:
            break;
}}


function btnani(btnkey){

   var activebutton =  document.querySelector("."+btnkey)
 activebutton.classList.add("pressed")
 setTimeout( function(){ activebutton.classList.remove("pressed")},600)


}








//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//this : gives the html command of the button clicked







