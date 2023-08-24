const app = require('./app')

const main = async() => {
    app.listen(3000);
    console.log('Server Port: ', 3000)
}

main()