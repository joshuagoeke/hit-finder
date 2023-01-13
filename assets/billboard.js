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
    apiGet = "billboard3.p.rapidapi.com"
    apiUrl = "https://billboard3.p.rapidapi.com/greatest-hot-100-singles?range=1-10"
    console.log(apiGet)
    console.log(apiUrl)
  }
  if(apiChoice == "Billboard Hot 100"){
    apiGet = "billboard3.p.rapidapi.com"
    apiUrl = "https://billboard3.p.rapidapi.com/hot-100?date=2022-07-07&range=1-10"
    console.log(apiGet)
    console.log(apiUrl)
  }
  if(apiChoice == "Billboard Global 200"){
    apiGet = "billboard3.p.rapidapi.com"
    apiUrl = "https://billboard3.p.rapidapi.com/billboard-global-200?date=2021-07-07&range=1-10"
    console.log(apiGet)
    console.log(apiUrl)
  }
  if(apiChoice == "All Time Summer Songs"){
    apiGet = "billboard3.p.rapidapi.com"
    apiUrl = "https://billboard3.p.rapidapi.com/greatest-of-all-time-songs-of-the-summer?range=1-10"
    console.log(apiGet)
    console.log(apiUrl)
  }

      var options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5efa58815emsh6280383a06b5a25p1cb931jsn08fce52522f3',
          'X-RapidAPI-Host': apiGet
        }
      };
// The api URL, and options var is passed into the fetch api function, and the api is called 
      fetch(apiUrl, options)
        .then(response => response.json())
        .then(function  (data) {
          console.log(data)
 

//Loop over the data to generate List Items, each list item will have a link that will call the MusicAPI and redirect to the "where to listen to page".
      for (var i = 0; i < data.length; i++) {
// Creating elements: list Item & link. Styling is added to the list items. They are rendered on the page. 
        var createListItem = document.createElement('li');
        createListItem.style = "font-size: large;"
        createListItem.style = "margin: 10px;"
        var link = document.createElement('a');
        link.style = "color: white;"
        link.textContent = data[i].rank + ". " + data[i].title + " - " + data[i].artist;
        createListItem.appendChild(link);
        listElement.appendChild(createListItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);


