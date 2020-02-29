const http = require('http')

const req = (req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('<h2>No Browser....</h2>')
    res.end()
}

const server = http.createServer(req)

const callback = ()=> console.log('funcionando')

server.listen(3000, callback)

