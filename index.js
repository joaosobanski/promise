const axios = require('axios')
main()

function delay() {
    return new Promise(r => setTimeout(r, 1000));
}

async function main() {
    let list = []
    await axios.get('https://api1.binance.com/api/v3/exchangeInfo').then(res => {
        list = (res.data.symbols)
    }).catch(err => {
        console.error(err.message)
    })


    const listed = list.filter(e => e.quoteAsset === 'BRL').map(e => { return e.baseAsset })
    console.log(listed)

}