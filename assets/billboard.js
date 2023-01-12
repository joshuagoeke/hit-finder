console.log("hello")

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
        fetchButton.style = "display: none;"
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

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

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5efa58815emsh6280383a06b5a25p1cb931jsn08fce52522f3',
          'X-RapidAPI-Host': 'billboard3.p.rapidapi.com'
        }
      };
      
      fetch('https://billboard3.p.rapidapi.com/hot-100?date=2022-07-07&range=1-10', options)
        .then(response => response.json())
        .then(function  (data) {
          console.log(data)
 

      //Loop over the data to generate List Items, each list item will have a link that will call the MusicAPI and redirect to the "where to listen to page".
      for (var i = 0; i < data.length; i++) {
        // Creating elements: list Item & link.
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