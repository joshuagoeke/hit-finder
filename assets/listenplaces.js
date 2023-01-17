console.log("hey hey hey!");

//variables
var storedSongTitle;
var rickAstley = document.querySelector("h2")
var searchObject;
var tracksEl;
var listEl = document.getElementById('results-list')

// var resultsHandl;

//puts song name in API format when only song name is stored in local storage.
function makeSearchObject(){
    storedSongTitle = localStorage.getItem("apiBodyTitle")
    console.log("from local storage: " + storedSongTitle)
    searchObject  = '{"track":"' + storedSongTitle + '","artist":"","type":"track","sources":["amazon-music","apple-music","deezer","pandora","sound-cloud","spotify","tidal","youtube","youtube-music","napster","qobuz","qq-music","vk","anghami","zvuk","gaana","jiosaavn","resso","boomplay"]}'
    console.log(searchObject)
    rickAstley.textContent = storedSongTitle + " - Rick Astley"
}

makeSearchObject();


//take that big hairy response object, clean it, and put the info we want in the DOM

function renderList(object){
    tracksEl = object.tracks;
    //takes out objects with "status: 'error' "
    function theCleaner(arr){
    console.log(arr.length)
    for (var i=arr.length-1 ; i >= 0 ; i--){
        if (arr[i].status !== 'success') {
            // console.log("error: " + arr[i].source);
            arr.splice([i],1);
            // console.log(arr.length);
        } 
    };
    for (var j=arr.length-1 ; j >= 0 ; j--){
        if (arr[j].data.url === null) {
            // console.log("no URL: "+ arr[j].source);
            arr.splice([j],1);
            // console.log(arr.length);
        } 
    };
    console.log(arr);
    for (var k=arr.length-1 ; k >= 0 ; k--){
        if (arr[k].data.name === null){
            // console.log("no trackname: "+ arr[k].source);
            arr.splice([k],1);
            // console.log(arr.length);
        }

    };
    for (var l=arr.length-1 ; l >= 0 ; l--){
        if (arr[l].data.artistNames === null){
            // console.log("no ArtistName: "+ arr[l].source);
            arr[l].data.artistNames = "Artist Name Unknown";
            // console.log(arr[l]);
            // console.log(arr.length);
        }

    };
    }
    theCleaner(tracksEl);
    // console.log(tracksEl)    

    //this part builds the list from the clean results
    for ( var m=0; m < tracksEl.length; m++){
        var createListItem = document.createElement('li');
        createListItem.style = "font-size: large;"
        createListItem.style = "margin: 10px;"
        var link = document.createElement('a');
        link.style = "color: white;"
        link.setAttribute('href', tracksEl[m].data.url);
        link.textContent = tracksEl[m].data.name + " - " + tracksEl[m].data.artistNames + " on " + tracksEl[m].source + ":\n" + link;
        createListItem.appendChild(link);
        listEl.appendChild(createListItem); 
    };

    
};

// API Call
function musicAPIcall(){
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '7cd2cf7430mshe9e159f72142c49p1c67e0jsn0526c36f4cef',
            'X-RapidAPI-Host': 'musicapi13.p.rapidapi.com'
        },
        body: searchObject,
    };
    
    fetch('https://musicapi13.p.rapidapi.com/search', options)
        .then(response => response.json())
        .then(response => renderList(response))
        .catch(err => console.error(err));   
    
}

 
//end of API call ^

// USE THIS CODE BLOXK IN YOUR JAVASCRIPT FILE

const testBtn = document.getElementById('testbtn')

testBtn.addEventListener('click', () => {
    console.log('test button clicked')
    musicAPIcall()
});