console.log("chalo suru kare")
let currentsong = new Audio;






async function getsongs() {
    let a = await fetch("http://127.0.0.1:5501/spotify%20clone/songs/ ")
    
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    console.log(response)
    let as = div.getElementsByTagName("a")
    
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/"))

        }
    }
    return songs
}
const play = track =>{
   
    currentsong.currentsrc = "/songs/" + track
     currentsong.play()
}

async function main() {
 
//  get the list of all songs
    let songs = await getsongs()
   


// show all the songs in playlist
    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `<li> 
            
                        <img class="first invert" src="first.svg" alt="">
                        
                        <div class="info">
                            <div class="songname">${songul}</div>
                            <div class="song2">Artist</div>
                        </div>
                        <div class="playnow">
                        <img class="invert playb" src="play.svg" alt="">
                        
                    </div>
                </li>`;
    }

    // attach an event listener to ech song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click",element =>{
            console.log(e.querySelector("info").firstElementChild.innerHTML)
            playMusic(e.querySelector("info").firstElementChild.innerHTML)
        })
       
    })



}
main()
