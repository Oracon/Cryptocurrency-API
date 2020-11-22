// const express = require('express');
// const cors = require('cors')
// const app = express();
// app.use(cors());

var apikey = {
    key: 'YOUR API KEY :)'
}
// GET
fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='
    + apikey.key)
    .then((response) => {// Tratando o erro
        if (!response.ok) throw new Error('Erro ao executar a requisição, status '
        + response.status);
        return response.json();
    })
    .then((api) => {
        //console.log(api);

        var text = "";
        for (let i=0; i<10; i++){
            text += `
                <div class="media p-2">
                    <img class="align-self-start mr-3" src="coin.jpg" alt="coin" width="100" height="70">
                    <div class="col media-body">
                        <h5 class="mt-0">${api.data[i].name}</h5>
                        ${api.data[i].symbol}
                    </div>
                    <div class="col media-body">
                        <h6 class="mt-0">${api.data[i].first_historical_data.slice(0, 10)}</h6>
                        First Historical Data
                    </div>
                    <div class="col media-body">
                        <h6 class="mt-0">Rank: ${api.data[i].rank}</h6>
                    </div>
                </div>
                `;
            document.getElementById("coins").innerHTML = text;
        }
    })
    .catch((err) => {
        console.error(err.message);
    });