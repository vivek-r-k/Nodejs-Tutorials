const http = require('node:http')
const fs = require('node:fs') //to read index.html file

const superHero = {
    firstName: 'Ramesh',
    lastName: 'C K'
}

const server = http.createServer((req,res) => {
    // res.writeHead(200,{"Content-Type": "text/html"}); //successful response - 200
    // res.end('Hello'); //change "Content-Type" to "text/plain"
    // res.end(JSON.stringify(superHero)) //change "Content-Type" to "application/json"
    // res.end("<h1>Hello world</h1>") //content type = text/html

    // TODO: to send html file to client
    // const html = fs.readFileSync('./index.html','utf-8') //readFileSync reads entire file at once
    // res.end(html) //content type = text/html
    
    // as readFileSync reads entire file at once we may use stream as below
    // fs.createReadStream("./index.html").pipe(res) //this is for static html page

    // TODO: dynamic html page
    // const name = "Vivek" 
    // let html = fs.readFileSync('./index.html','utf-8') 
    // html = html.replace("{{name}}",name)
    // res.end(html)

    // console.log(req);

    // TODO: html routing
    if(req.url == '/'){
        res.writeHead(200,{"Content-Type": "text/plain"})
        res.end("Home page")
    }
    else if(req.url ==='/api'){
        res.writeHead(200,{"Content-Type": "text/plain"})
        res.end(JSON.stringify(superHero))
    }
    else{
        res.writeHead(400)
        res.end("Page not found")
    }

})

server.listen(3000, () => {
    console.log("Server running on port 3000");
})