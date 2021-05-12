function find(){
    var singer = document.getElementById('singer').value;
    var song = document.getElementById('song').value;  
    const api_url = 'https://api.lyrics.ovh/v1/'+singer+'/'+song

    async function getLyric() {
        const response = await fetch(api_url);
        const data = await response.json();
        const dataa = data.lyrics
        document.getElementById('lat').innerHTML = dataa.replace("?", ".")
        console.log(dataa.replace("?", "."));
    };
    getLyric();
    return getLyric();
}

/* const api_url = 'https://api.lyrics.ovh/v1/'+singer+'/'+song

async function getLyric() {
    const response = await fetch(api_url);
    const data = await response.json();
    const dataa = data.lyrics
    document.getElementById('lat').textContent = dataa.replace("?", ".")
    console.log(dataa.replace("?", "."));
}
getLyric(); */