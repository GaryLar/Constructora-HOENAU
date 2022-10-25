
const nodemailerTrasnporter=require("../controllers/functions")
module.exports={
    index:(req,res)=>{
        let proyectos=["Proyecto 1","Proyecto 2","Proyecto 3"]
        res.render("home.ejs",{
            proyectos
        })
    },
    about:(req,res)=>{
        res.render("nosotros.ejs")
    },
    mail:(req,res)=>{

       let {name,email,phone,comments}=req.body
        const mensaje={
            from:`${email}`,
            to:`Hoeanau <solutions.lardev@gmail.com>`,
            subject:`"HOLa" soy ${name}`,
            text:`"Mi num es "${phone} y mi comentario es: ${comments}`
        }
  nodemailerTrasnporter.sendMail(mensaje,(err,data)=>{
    console.log('email enviado')
            res.redirect('/')
  })

}

}
