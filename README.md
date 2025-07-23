# Crypto Price API Wrapper 🪙

A simple Node.js API that fetches and formats real-time crypto prices for BTC, ETH, and SOL — with optional 24h change data.

## 🔧 Features
- Clean endpoints for BTC, ETH, and SOL
- Optional 24h price change (`?diff=true`)
- Powered by [CoinGecko API](https://www.coingecko.com/en/api)

## 🚀 Usage

### Example Request:
GET /coin/bitcoin?diff=true

### 📤 Example Response
```json
{
  "coin": "bitcoin",
  "price_usd": 29145.22,
  "change_24h": {
    "value": 250.47,
    "percent": 0.87
  }
}
```

### 👀 Check it out for yourself

https://coingecko-api-wrapper-production.up.railway.app/coin/bitcoin?diff=true

## 🛠 Installation

git clone https://github.com/ProKafelek12e/CoinGecko-API-Wrapper.git
cd crypto-price-wrapper  
npm install

## 🔐 Setup

Create a `.env` file in the project root with your CoinGecko API key:  
`API_KEY=your_coingecko_api_key_here`

## ▶️ Run the Server

node index.js

The API will be running at: http://localhost:7000

Try accessing:  
http://localhost:7000/coin/ethereum?diff=true

## ⚙️ Supported Coins

- Bitcoin  
- Ethereum  
- Solana

---

Feel free to contribute or open issues!  
MIT License