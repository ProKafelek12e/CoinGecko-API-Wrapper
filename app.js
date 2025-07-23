const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const port = 7000;
const apiKey = process.env.API_KEY;

app.get('/',(req, res) => {
    res.status(200).send('Healthy');
})

app.get('/coin/:symbol', async(req, res) => {
    const symbol = req.params.symbol;
    const diff = req.query.diff;
    let data = null;

    try{
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=${symbol}&precision=2${diff==='true'?"&include_24hr_change=true":""}`,{
        method:'GET',
        headers:{
            'x-cg-api-key':apiKey,
            'accept':'application/json'
        }
    });
    data = await response.json();
    } catch(error){
        if(error){
            return res.status(503).json({error: 'CoinGecko API is unavailable at the moment.' });
        }
    }

    if (!data || Object.keys(data).length === 0) {
        return res.status(404).json({ error: 'Coin not found or unsupported.' });
    }
    const key = Object.keys(data)[0];
    const coinData = data[key];  

    const current_value = parseFloat(coinData.usd);
    const previous_value = parseFloat(coinData.usd_24h_change);

    let wrap = {
        "coin":symbol,
        "price_usd":coinData.usd,
    }
    if(diff){
        wrap['change_24h'] = {
            "value":parseFloat(previous_value.toFixed(2)),
            "percent": parseFloat((previous_value / current_value *100).toFixed(2))
        }
    }

    res.status(200).json(wrap);
})

app.listen(port, () => console.log(`Api started on port: ${port}`));
