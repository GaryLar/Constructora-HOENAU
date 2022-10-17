const express=require("express")
const router=express.Router()
const indexController=require("../controllers/indexController")


router.get("/",indexController.index)
router.get("/obras",indexController.projects)
router.get("/nosotros",indexController.about)
router.post("/nosotros",indexController.mail)
module.exports=router