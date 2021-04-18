const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page")
    }
    if (req.url === "/about") {
        res.end("This is ur short history")
    }
    res.end("Oops! nous ne parvenons pas à atteindre cette page")
})

server.listen(5000)
