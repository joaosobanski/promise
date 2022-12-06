const fs = require('fs')

const readFile = file => new Promise((res, rej) => {
    fs.readFile(file, (err, content) => {
        if (err)
            rej(err)
        else
            res(content)
    })
})





async function main() {
    try {

        console.log('1')
        const d = await readFile('./1.txt')
        console.log(String(d))
        console.log('2')
        const at = await readFile('./13.txt')
        console.log(String(at))
        console.log('3')
    } catch (err) {
        console.error(err.message)
    }
    // await fetch('https://testnet.binance.vision/api/v3/exchangeInfo')
    //     .then(response => response.json())
}

main()

