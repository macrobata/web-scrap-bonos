const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';


const params = {
    "uri": "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States",
    "method": "GET",
    "proxy": "http://10.220.2.200:3128",
};

//rp(url)
rp(params)
    .then(function(html){
        //success!
        console.log(html);
    })
    .catch(function(err){
        //handle error
    });
