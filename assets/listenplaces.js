console.log("results page MVP!");

//variables
var rickAstley = document.querySelector("h2")
var searchObject;
var tracksEl;
var listEl = document.getElementById('results-list')


//JSON parse of searchObject AND puts the song name and artist in the search title
function parseAndTitle(){
    searchObject = localStorage.getItem("apiBodyTitle")
    var titleGrab = JSON.parse(searchObject)
    // console.log(titleGrab)
    rickAstley.textContent = titleGrab.track + " - " + titleGrab.artist
}

parseAndTitle();


//take that big hairy response object, clean it, and put the info we want in the DOM

function renderList(object){
    tracksEl = object.tracks;
    //takes out objects with "status: 'error'" & null data properties 
    function theCleaner(arr){
    console.log(arr.length)
    for (var i=arr.length-1 ; i >= 0 ; i--){
        if (arr[i].status !== 'success') {
            arr.splice([i],1);
        } 
    };
    for (var j=arr.length-1 ; j >= 0 ; j--){
        if (arr[j].data.url === null) {
            arr.splice([j],1);
        } 
    };
    console.log(arr);
    for (var k=arr.length-1 ; k >= 0 ; k--){
        if (arr[k].data.name === null){
            arr.splice([k],1);
        }

    };
    //sets unknown artist names as "Artist Name Unknown"
    for (var l=arr.length-1 ; l >= 0 ; l--){
        if (arr[l].data.artistNames === null){
            arr[l].data.artistNames = "Artist Name Unknown";
        }
    };
    }
    theCleaner(tracksEl);   

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

musicAPIcall()

//end of API call ^

// TEST BUTTON (for testing)

// const testBtn = document.getElementById('testbtn')

// testBtn.addEventListener('click', () => {
//     console.log('test button clicked')
//     musicAPIcall()
// });