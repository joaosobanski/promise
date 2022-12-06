const fs = require('fs')

const readFile = path => new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
        if (err)
            rej(err)
        if (data)
            res(data)
    })
})

async function main() {
    try {

        console.log('1')

        const data = await readFile('./1.txt');
        console.log(String(data))

        console.log('2')

        fs.readFile('./1.txt', (err, data) => {
            if (err)
                console.error(err.message)
            console.log(String(data))
        })

        console.log('3')
    } catch (err) {
        console.error(err.message)
    }
}



main()