const express=require("express")
const socket = require("socket.io")
const path = require("path")

const app=express();

//we are specifying path to static files by using a middleware..
app.use(express.static(path.join(__dirname,'./public')))

//specifying path to index.html..i.e,FE
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

const server=app.listen(4000,()=>{
    console.log("Server is started at ported 4000..");
})

const io=socket(server,{cors:{origin:"*"}});
io.on("connection",(socket)=>{
    console.log("User is connected to the server=>",socket.id);
    //joining to chat..
    socket.on("joining message",(name)=>{
    //    let name=username;
        io.emit("chat message",`--------------------------------------------------${name} has joined the chat-------------------------------------------------------`)
    })
    //to handle conversation(chatting..)..i.e broadcast msg to every client except sender..
    socket.on("chat message",(msg)=>{
        socket.broadcast.emit("chat message",msg)
    })
    //to disconnect chat
    socket.on("disconnect",(name)=>{
    //    let name=username;
        console.log("User has disconnected..");
        io.emit("chat message",`--------------------------------------------------${name} has left chat--------------------------------------------------------------`)
    })
})
