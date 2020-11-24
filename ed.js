
const { json } = require('body-parser')
const http = require('http')

const port = 300

let student = [

    {
        "company":"ndtech",
        "email":"info@ndtech.com"
    },
    {
        "company":"globalBiz",
        "email":"info@globalBiz.com"
    }
]

const app = http.createServer(function (req, res){
    console.log("my server is ready")
    
    console.log(req.headers.authorization)
    // res.write("this is an api")

    let body = []
    req.on("data", function(chunk){
        body.push(chunk)
    }).on('end', function(){
        body = Buffer.concat(body).toString()
        console.log(body)
        const {method, url} = req
        let status = 404
        let response = {
            sucess:false,
            data:null
        }
    if (method === "GET" && url === "/api/edwin/info"){

        status = 200;
        response.sucess = true
        response.data = student
    }
    else if (method ==="POST" && url === "/api/edwin/info"){
        const {company, email} = JSON.parse(body)

        if (!company || !email){
            sucess = 404
            response.sucess =false
            response.data = null
            error = "please put in somme valid data"

        }else{
            student.push({company, email})   
            status = 201
            response.sucess = true
            response.data = student         
        }


    }
    

    res.writeHead(status, {"Content-Type":"application/json"})
    res.write(JSON.stringify(response))
    res.end()
    })
    
})

app.listen(port, function(){
    console.log("this is my port")
})