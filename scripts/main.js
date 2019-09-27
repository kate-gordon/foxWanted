
const yesButton = document.querySelector("#yesButton"); 
const noButton = document.querySelector("#noButton"); 
const innerButton = document.querySelector("button-box"); 


function showTheFox() {
    const foxPic = document.getElementById("gif");
    get(`https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/`).then( 
    response => {
    foxPic.setAttribute("src", response.image);
})
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


function fleaBagGif(){
    const fleaGif = document.getElementById("gif"); 
    const x = Math.floor(Math.random() * (50 - 0 + 1)) + 0; 
   get("https://api.giphy.com/v1/gifs/search?q=fleabag&api_key=ktWMUewj3zuj2tct9Ja3QO4OQQIWmS5B&limit=50").then(
       response => {
           fleaGif.setAttribute("src", response.data[x].images.original.url);
       })
}

yesButton.addEventListener("click", function(event){
    event.preventDefault(); 
    showTheFox(); 
})

noButton.addEventListener("click", function(event){
    event.preventDefault();
    fleaBagGif(); 
})


showTheFox();