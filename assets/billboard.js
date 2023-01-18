// dropdown menu functions
const dropdowns = document.querySelectorAll('.dropdown');  

dropdowns.forEach(dropdown => {

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    var fetchButton = document.getElementById('fetch-button');
    select.addEventListener('click', () => {
        select.classList.toggle('select.clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
// When the dropdown menu is open, the find hits button is hidden
        fetchButton.style = "display: none;"
    });
// When a dropdown menu option is chosen, the list results header name is changed to the option chosen
// When a dropdown menu option is chosen, the choice is saved to local storage to be called back when the fetch function is triggered
    options.forEach(option => {
        option.addEventListener('click', () => {
            const listName = option.innerText;
            var listTitle = document.getElementById('list-title')
            listTitle.innerText = listName
            selected.innerText = option.innerText;
            var apiOption = listTitle.innerText
            localStorage.setItem('billboardList', apiOption)

            select.classList.remove('select-clicked');

            caret.classList.remove('caret-rotate');

            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
            fetchButton.style = "display: ;"
        });
    });
});

var listElement = document.getElementById('results-list');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
// When the function is triggered by clicking the find hits button, the api URL is given a value that corresponds to the dropdown menu choice, which is pulled from local storage. 
  var apiChoice = localStorage.getItem('billboardList')
  console.log(apiChoice)
  
  if(apiChoice == "All Time 100 Songs"){
    apiUrl = "https://billboard3.p.rapidapi.com/greatest-hot-100-singles?range=1-10"
    console.log(apiUrl)
  }
  if(apiChoice == "Billboard Hot 100"){
    apiUrl = "https://billboard3.p.rapidapi.com/hot-100?date=2022-07-07&range=1-10"
    console.log(apiUrl)
  }
  if(apiChoice == "Billboard Global 200"){
    apiUrl = "https://billboard3.p.rapidapi.com/billboard-global-200?date=2021-07-07&range=1-10"
    console.log(apiUrl)
  }
  if(apiChoice == "All Time Summer Songs"){
    apiUrl = "https://billboard3.p.rapidapi.com/greatest-of-all-time-songs-of-the-summer?range=1-10"
    console.log(apiUrl)
  }

      var options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '40207c7b39msh22e1e2b12068043p10e59djsn538e8d8321d0',
          'X-RapidAPI-Host': "billboard3.p.rapidapi.com"
        }
      };
// The api URL, and options var is passed into the fetch api function, and the api is called 
      fetch(apiUrl, options)
        .then(response => response.json())
        .then(function  (results) {
          console.log(results)
 

//Loop over the data to generate List Items, each list item will have a link that will call the MusicAPI and redirect to the "where to listen to page".
// Creating list Item elements Styling is added to the list items. They are rendered on the page. Event listener and function added to <li> 
        for (var i = 0; i < results.length; i++) {
          
          // creating variables for API data and style attributes
          var title = results[i].title
          var artist = results[i].artist
          var styles = {
            "margin" : "10px",
            "color" : "white",
            "font-size" : "30px"
          }
          // Creating list item elements
          var createListItem = document.createElement('li');  
          // assigning style attributes 
          Object.assign(createListItem.style, styles)
          // assigning API data to text content attributes
          createListItem.textContent = title + " - " + artist
          // appending list item elements to ul element on HTML page
          listElement.appendChild(createListItem);
          // adding event listener and function to be triggered on click 
          // function adds clicked song title and artist to local storage to be later used in Music API on next page. 
          // user is redirected to Listen Page
          createListItem.addEventListener('click', function clicked(event){
            var ok = event.target.textContent
            console.log(ok)
            var trackArtist = ok.split(" - ")
            console.log(trackArtist)
            var searchDeez = '{"track":"' + trackArtist[0] + '","artist":"' + trackArtist[1] + '","type":"track","sources":["amazon-music","apple-music","deezer","pandora","sound-cloud","spotify","tidal","youtube","youtube-music","napster","qobuz","qq-music","vk","anghami","zvuk","gaana","jiosaavn","resso","boomplay"]}'
            localStorage.setItem("apiBodyTitle", searchDeez)
            window.location.assign("./listenplaces.html")
      })
    }
  })
}

fetchButton.addEventListener('click', getApi);
var navsearch = document.getElementById("searchBtn")
navsearch.addEventListener("click", function(event){
  event.preventDefault()
  console.log ("input confirm")
  var input= document.getElementById("search").value;

 
        var searchDeez = '{"track":"' + input + '","artist":"","type":"track","sources":["amazon-music","apple-music","deezer","pandora","sound-cloud","spotify","tidal","youtube","youtube-music","napster","qobuz","qq-music","vk","anghami","zvuk","gaana","jiosaavn","resso","boomplay"]}'
        localStorage.setItem("apiBodyTitle", searchDeez);
        window.location.assign("listenplaces.html");
  
  }
)
