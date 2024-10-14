const router = require("express").Router();
const mongooseHandler = require("./model")
const validator = require("./schema");
router.post("/", async(req,res)=>{
    const {value:data,error} = validator.schema.validate(req.body);
    if(error) res.status(404).send({message:`error ${error.message}`}); else (async()=>{
    const $data = await mongooseHandler.create(data);
    if($data?.errors){
        res.status(400).send({message:$data.message})
    }
    else{
        res.status(201).send({message:"Success"})
    }      
    })()     
});

router.get("/all",async(req,res)=>{
    const $data = await mongooseHandler.getAll();
    res.status(201).send({packaging:$data})
});

router.put("/",(req,res)=>{
    
});

router.delete("/",(req,res)=>{
    
});

module.exports = router