// const express=require("express")
// const socket=require("socket.io")
// const path = require("path")
// const PORT=8000;

// const app=express();
// app.use(express.static(path.join(__dirname,"./public")))
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + "./public/index.html");
// })
// const server = app.listen(PORT,()=>{
//     console.log("Server running on port 8000..");
// })
// // const io=socket(server,{cors:{origin:"any particular http if requited..()"http://...", methods:["GET","POST"]}});
// const io=socket(server,{cors:{origin:"*"}});
// //to store users
// const users = {};

// io.on("connection",(socket)=>{
//     //user joins
//     socket.on("new-user-joined",(name)=>{
//         console.log(name,"joined the chat");
//         //storing user
//         users[socket.id]=name;
//         socket.broadcast.emit("user-joined",name);
//     })
//     //message sent-(name:name --giving name directly here.. or name:users[socket.id]--here fetching name by id from users object)
//     socket.on("send",(message)=>{
//         socket.broadcast.emit("recieve",{message:message,name:users[socket.id]});
//     })
//     //when user disconnect..
//     socket.on("disconnect",()=>{
//         socket.broadcast.emit("left",users[socket.id]);
//         //deleting user
//         delete users[socket.id];
//     })
// })