//testDolly is enormous, so paste here to test, then delete. Minimize while testing for easier scrolling

//API search request

var searchObject = 


console.log(testDolly.tracks.length);

var tracksEl = testDolly.tracks;

console.log(tracksEl)

//actually use these variables:
var listEl = document.getElementById('results-list')

console.log(tracksEl[2].status)
console.log(tracksEl[2].data.url) //works as long as the data value isn't null, which is why we need to toss errors out

// var tracksEl;
function renderList(){
    //takes out objects with "status: 'error' "
    function dataParser(arr){
    console.log(arr.length)
    for (var i=arr.length-1 ; i >= 0 ; i--){
        if (arr[i].status !== 'success') {
            console.log("error: " + arr[i].source);
            arr.splice([i],1);
            console.log(arr.length);
        } 
    };
    for (var j=arr.length-1 ; j >= 0 ; j--){
        if (arr[j].data.url === null) {
            console.log("no URL: "+ arr[j].source);
            arr.splice([j],1);
            console.log(arr.length);
        } 
    };
    console.log(arr);
    for (var k=arr.length-1 ; k >= 0 ; k--){
        if (arr[k].data.name === null){
            console.log("no trackname: "+ arr[k].source);
            arr.splice([k],1);
            console.log(arr.length);
        }

    };
    for (var l=arr.length-1 ; l >= 0 ; l--){
        if (arr[l].data.artistNames === null){
            console.log("no ArtistName: "+ arr[l].source);
            arr[l].data.artistNames = "none given";
            console.log(arr[l]);
            console.log(arr.length);
        }

    };
    }
    dataParser(tracksEl);
    console.log(tracksEl)    



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
renderList();
