const axios = require('axios')
main()

function delay() {
    return new Promise(r => setTimeout(r, 1000));
}

async function main() {
    let list = []
    await axios.get('https://testnet.binance.vision/api/v3/exchangeInfo').then(res => {
        list = (res.data.symbols)
    }).catch(err => {
        console.error(err.message)
    })

    console.log(list.filter(e => e.quoteAsset === 'USDT'))
}