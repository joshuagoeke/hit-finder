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
