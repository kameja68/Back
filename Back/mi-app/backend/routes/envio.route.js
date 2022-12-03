let mongoose =require ("mongoose")
express =require ("express")
router = express.Router()

let envioSchema =require("..modelos/envio")
const envio = require("../modelos/envio")

//create
//localhost:5000 /envios/create 
router.route ("/crete").post((req,res,next)=>{
    envioSchema.create (req.body,(error,data )=>{
        if (error) {
            return next (error)
         } else{
            res,json(data)
         }
    }
    )
})

//read envios
//localhost:5000 /envios/1 
router.route ("/:id").get((req,res)=>{
    envioSchema.findById(req.params.id,(error,data )=>{
    if (error) {
        return next (error)
     } else{
        res,json(data)
    }
}
)
})

//update envios
//localhost:5000 /envios/edit/2
router.route ("edit/:id").put((req,res)=>{
    envioSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body,
    },
        
       (error,data )=>{
    if (error) {
        return next (error)
     } else{
        res,json(data)
    }
}
)
})

//Delete envios
//localhost:5000 /envios/delete/2
router.route ("delete/:id").delete((req,res)=>{
    envioSchema.findByIdAndRemove(req.params.id, (error,data )=>{
    if (error) {
        return next (error)
     } else{
        res.status(200).json({
            msg:data
        })    }
}
)
})

module.exports=router