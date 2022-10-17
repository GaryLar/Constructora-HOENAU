const express=require("express")
const app=express()
const path=require("path")

const indexRouter=require("./src/routes/indexRouter")

require('dotenv').config();
const ports=process.env.PORT

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use("/",indexRouter)



app.listen(ports,()=>{
    console.log(`servidor levantado en el puerto ${ports}, http://localhost:${ports}`);
})
