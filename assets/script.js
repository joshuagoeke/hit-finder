//Billboard100 API   
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5efa58815emsh6280383a06b5a25p1cb931jsn08fce52522f3',
		'X-RapidAPI-Host': 'billboard3.p.rapidapi.com'
	}
};

fetch('https://billboard3.p.rapidapi.com/hot-100?date=2022-07-07&range=1-10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


//MUSIC API

const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'X-RapidAPI-Key': '5efa58815emsh6280383a06b5a25p1cb931jsn08fce52522f3',
		'X-RapidAPI-Host': 'musicapi13.p.rapidapi.com'
	}
};

fetch('https://musicapi13.p.rapidapi.com/search/introspection', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	//Comment to test merging GitHub 

//Sources List for Music API
var sources = [
	  "amazon-music",
	  "apple-music",
	  "deezer",
	  "pandora",
	  "sound-cloud",
	  "spotify",
	  "tidal",
	  "youtube",
	  "youtube-music",
	  "napster",
	  "qobuz",
	  "qq-music",
	  "vk",
	  "anghami",
	  "zvuk",
	  "gaana",
	  "jiosaavn",
	  "resso",
	  "boomplay"
	];
