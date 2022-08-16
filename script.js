// this my file 
let alldrumbuttons = document.querySelectorAll(".drum").length;

//loop for mouse click sound play 

for (var i = 0; i < alldrumbuttons; i++) 
{

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
      var buttonInnerHTML = this.innerHTML;
  
      makesound(buttonInnerHTML);
  
      button_animation(buttonInnerHTML);
  
    });
  
}
// for ( button in alldrumbuttons) {
//     document.querySelectorAll(".drum")[button].addEventListener ("click",function ()
//     {
//         let buttonInnerHTML = this.innerHTML;

//         makesound (buttonInnerHTML);
//         button_animation (buttonInnerHTML);
//     });
// }



// code for keyboard pressed keys 

document.addEventListener("keydown", event =>{
    makesound (event.key);
    button_animation(event.key);
});

// value = button pressed on keyboard or clicked by mouse 
function makesound ( value ){
    switch (value){
        case "r":
            let sound_1 = new Audio("sounds//tom-0.mp3");
            sound_1.play();
            break;
        case "k":
            let sound_2 = new Audio("sounds//tom-1.mp3");
            sound_2.play();
            break;
        case "b":
            let sound_3 = new Audio("sounds//tom-2.mp3");
            sound_3.play();
            break;
        case "a":
            let sound_4 = new Audio("sounds//tom-3.mp3");
            sound_4.play();
            break;    
        case "n":
            let sound_5 = new Audio("sounds//tom-4.mp3");
            sound_5.play();
            break;
        case "d":
            let sound_6 = new Audio("sounds//tom-5.mp3");
            sound_6.play();
            break;
        case "s":
            let sound_7 = new Audio("sounds//tom-6.mp3");
            sound_7.play();
            break;

    }
}
// pressing = the value passed by keyboard or through the mouse click 
function button_animation(pressing){
    let current_button = document.querySelector ("."+pressing);
    // adding styling for creating animation from the style sheet 
    current_button.classList.add("pressed");
    // adding timeout function to remove the style after a second to create a proper animation 
    setTimeout(function (){
        current_button.classList.remove("pressed");
    },100);


}