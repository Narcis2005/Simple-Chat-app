
const app = require("express")(); 
const http = require("http").createServer(app); 
const io=  require("socket.io")(http, {cors: {origin: "*"}});

io.on("connection", socket => {
    console.log(`new conn ${socket.id}`)
    socket.on("message", ({name, message}) =>{
        console.log(`new message ${name} ${message} `)
        io.emit("message", {name, message})
    })
})

http.listen(5000, () => {
    console.log("listening on 5000")
})

