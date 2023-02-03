function submit(username) {
    console.log(username)
    fetch(`https://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=40d1b250d4120479dcc27bfb0a67d77a&user=${username}&format=json&limit=250`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            let container = document.getElementById('copypasta')
            let html = "Me? Oh nothing special. "

            data.artists.artist.forEach(artist => {
                html += artist.name + ", "
            })

            html += "the list goes on"

            container.innerHTML = html
        });
}


document.getElementById('username').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        let username = document.getElementById('username').value
        submit(username)
    }
});
