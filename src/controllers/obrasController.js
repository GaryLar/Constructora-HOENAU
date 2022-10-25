module.exports={
    projects:(req,res)=>{
        res.render("obras.ejs")
    },
    obraDetail:(req,res)=>{
        const obras=req.params.id
        res.render("obra.ejs",{
            obras
        })
    }
}
