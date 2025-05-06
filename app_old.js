const http = require('http')

http.createServer((request,response)=>{
    // response.writeHead(200, {'Content-Type':'application/json'})
    // const persona = {
    //     id: 1,
    //     nombre: 'Christian'
    // }
    
    // response.write(JSON.stringify(persona))
    response.write('Nomina360 test server')
    response.end()
}).listen(8080)

console.log('Escuchando el puerto',8080)