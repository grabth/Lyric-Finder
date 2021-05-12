import eel
import requests
import json

eel.init('C:\\Users\\Sabaruddin\\Documents\\eel\\lyric finder\\web')

@eel.expose
def test(singer,song):
    url = "https://api.lyrics.ovh/v1/"+singer+"/"+song
    webdata = requests.get(url)
    data = webdata.json()
    lyrics = (data['lyrics'])
    print(lyrics)

eel.start('index.html')