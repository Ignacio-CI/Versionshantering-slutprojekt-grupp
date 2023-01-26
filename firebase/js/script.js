// Hide-show messagePostContainer
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/779");

$('#messagePopUpBtn').click(() => {
    $('.messagePostContainer').removeClass('inactive');
    $('.messagePostContainer').addClass('active');
})

$('#back').click( () => {
    $('.messagePostContainer').removeClass('active');
    $('.messagePostContainer').addClass('inactive');
})

$('#send').click ( () => {
    $('.messagePostContainer').removeClass('active');
    $('.messagePostContainer').addClass('inactive');
    audio.play();
})



//Limitation on characters

const maxCharacters = 500;
$('#message-input').on('keyup', function() {

  let characters = $(this).val().length;

  if (characters > maxCharacters) {
   
    $(this).val($(this).val().substring(0, maxCharacters));
  }
});

let garfAnimation = anime({
  targets: '#garf',
  delay: 0,
  keyframes: [
    {translateY: '24'},
    {translateX: '-45'},
    {rotate: '75'},
    {translateY: '600'},
    {opacity: 0},
  ],
  autoplay: false,
  })
  
  function garfAppear() {
    if (document.getElementById('message-input').value.indexOf("garfield") > -1) {
        console.log('garfield') 
        let garfield = document.getElementById('garf')
        garfield.style.display= "block"
        garfAnimation.play();     
      }else{
        document.getElementById('garf').style.display = "none"
      }
  }


// Showing characters remaining
const messageInput = document.getElementById("message-input");
const counter = document.getElementById("counter");

counter.innerHTML = "Characters remaining: 500";

messageInput.addEventListener("input", function () {
    // Get the message length
    let messageLength = messageInput.value.length;

    // Update the counter
    counter.innerHTML = "Characters remaining: " + (500 - messageLength);

    // Check if the message length is greater than the limit
    if (messageLength > 500) {
        messageInput.value = messageInput.value.substring(0, 500);
        counter.innerHTML = "Characters remaining: 0";
    }
});


