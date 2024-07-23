const button = document.getElementById("myButton");

hasmouseclicked = false;
audioplayed = 0;


// Audio element for sound effect
const clickSound = new Audio('audios/fullcanttouchthis.mp3'); // Replace with your click sound path

button.addEventListener("click", () => {
  button.innerHTML = "Can't Touch this!";
  hasmouseclicked = true

 
});

button.addEventListener("mouseover", () => {
  if(hasmouseclicked){
    clickSound.play();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));
  
    button.style.position = 'absolute';
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
    setTimeout(pauseAudio, 4000);
  }
 
});

function pauseAudio(){
  clickSound.pause();
}








