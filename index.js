var server = require('auth-static')

server({
    options: {
        cache: 3600,
        gzip: true
    },
    password: process.env.PASSWORD,
    port: 1234,
    realm: 'Private',
    root: './publicgulp ',
    username: process.env.USERNAME
})
