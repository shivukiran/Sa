const d = new Date();
document.getElementById('demo').innerHTML = 'Copyright ' + d.getFullYear();




var sound = document.getElementById("sound");
var audio = new Audio("toy audio.mp3");

sound.addEventListener("click" , function(){

    audio.play();

   
})

// Get the button element by its ID
var sendButton = document.getElementById("sound");

// Get the modal, close button, and modal content elements
var modal = document.getElementById("myModal");
var closeButton = document.querySelector(".closebutton");

// Add event listener to the "Send Message" button
sendButton.addEventListener("click", function() {
    // Show the modal
    modal.style.display = "block";
    var nameInput = document.getElementById("fname");
    var subjectInput = document.getElementById("subject");
    var serviceInput = document.getElementById("box1");


    var name = nameInput.value;
    var subject= subjectInput.value;
    var service = serviceInput.value;

    var nameMessage = document.getElementById("nameMessage");
    var subjectMessage=document.getElementById("subjectMessage");
    var serviceMessage = document.getElementById("serviceMessage");

    nameMessage.textContent = "Thanks for you Response   " + name ;
    subjectMessage.textContent = subject;
    serviceMessage.textContent = "Your Service :" +service;
 
});

// Add event listener to close button to hide the modal
closeButton.addEventListener("click", function() {
    // Hide the modal
    modal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
