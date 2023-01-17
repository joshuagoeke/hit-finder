console.log("hello")

//submit button
var submitb = document.getElementById('submit');  

//take input value
submitb.addEventListener("click", function(){
    event.preventDefault()
    var input= document.getElementById('search-field').value;
    console.log(input);
    var searchDeez = '{"track":"' + input + '","artist":"","type":"track","sources":["amazon-music","apple-music","deezer","pandora","sound-cloud","spotify","tidal","youtube","youtube-music","napster","qobuz","qq-music","vk","anghami","zvuk","gaana","jiosaavn","resso","boomplay"]}'
    localStorage.setItem("apiBodyTitle", searchDeez);
    window.location.assign("./pages/listenplaces.html");
    

})

const dropdowns = document.querySelectorAll('.dropdown');  

dropdowns.forEach(dropdown => {

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select.clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
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
        });
    });
});
