const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.invertironline.com/mercado/cotizaciones/argentina/bonos/todos';


const params = {
    "uri": "https://www.invertironline.com/mercado/cotizaciones/argentina/bonos/todos",
    "method": "GET",
    "proxy": "http://10.220.2.200:3128",
};



const isBonoDolar = function(bono) {

    return (bono.length === 5 && bono.slice(bono.length - 1)=== 'D')
};


//rp(url)
rp(params)
    .then(function (html) {

        var getTr = $('tr', html),
            titleBono = [];

        //console.log(getTr)

         getTr.each(function (i, e) {

            var tituloBono = $('td[data-field=IDTitulo]', this).text().trim(); //Con trim se limpia los saltos de lines


            if (isBonoDolar(tituloBono)){
                var ultimoPrecio = $('td[data-field=UltimoPrecio]', this).text().trim();
                var obj = {
                    titulo: tituloBono,
                    ultimoPrecio: ultimoPrecio
                };

                titleBono.push(obj)

                //console.log(obj)
            }


        })

        console.log(titleBono)
        console.log(titleBono.length)
        console.log(titleBono[15])

        return

        //console.log(titleBono)


    })
    .catch(function (err) {
        //handle error
    });