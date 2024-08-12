// require("dotenv").config()
// const express=require("express")
// const app= express()
// const cors=require("cors")
// require("./db/connection")
// const router=require("./Routes/router")
// const PORT=9999;

// //middleware 
// app.use(express.json())
// app.use(cors())
// app.use(router)



// app.listen(PORT,()=>{
//     console.log(`Server start at port number : ${PORT}`);
// })

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/connection");
const router = require("./Routes/router");
const PORT = 9999;



// middleware
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
