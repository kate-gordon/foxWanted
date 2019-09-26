


function showTheFox() {
    const foxPic = document.getElementById("image");
    get(`https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/`).then( 
    response => {
    foxPic.setAttribute("src", response.image);
})
}

showTheFox();