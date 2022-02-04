//importing express
const express =  require ('express');

//importing mongoose
const mongoose =  require ("mongoose");

//importing routes
const router =  require ("./routes/routes")




//initializing express
const app = express()
app.use(express.json())

//using routes
app.use(router);
//importing dotenv
 require('dotenv').config()

//setting up port
 const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('Database connected')
}) 


 app.listen(PORT, ()=>{
     console.log( `Server started on port ${PORT}`)
 })