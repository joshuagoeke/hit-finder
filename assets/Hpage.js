console.log("hello")

//submit button
var submitb = document.getElementById('submit');  
var searchField = document.getElementById('search-field')

//take input value
submitb.addEventListener("click", function(event){
    event.preventDefault()
    var input= document.getElementById('search-field').value;
    if(input == ""){
        var error = document.createElement("div")
        var styles = {
            "margin" : "20px",
            "color" : "red",
            "font-size" : "30px"
          }       
          error.textContent = "ERROR  - SONG TITLE MUST BE ENTERED - CLICK TO CLEAR"
          document.body.appendChild(error)
          Object.assign(error.style, styles)
          error.addEventListener('click', ()=> {
          var clear = {
            'display': "none"
          }
          Object.assign(error.style, clear)})
          return;

    }else
    console.log(input);
})