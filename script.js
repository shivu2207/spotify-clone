console.log("chalo suru kare")

fetch('https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5', {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY' 
    }
})
.then(response => response.json()) 
.then(data => console.log(data)) 
.catch(error => console.error('Error:', error)); 





// async function getsongs() {
//     let a = await fetch("https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5 ")
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     let songs = []
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href)

//         }
//     }
//     return songs
// }
// async function main() {
//     let songs = await getsongs()
//     console.log(songs)
// }
// main()
