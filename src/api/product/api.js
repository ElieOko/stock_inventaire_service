const { create } = require("./model");
const mongooseHandler = require("./model")
const router = require("express").Router();

router.post("/store",async(req,res)=>{
    const {body} = req;
    console.log(body.devise)
    const $result = await mongooseHandler.create(body);
    if($result?.errors){
        res.status(400).send({message:$result?.errors.message})
        console.log($result?.errors)
    }
    else{
        res.status(201).send({message:"Enregistrement réussie avec succès"})
    }
});

router.get("/all",async(req,res)=>{
    const $data = await mongooseHandler.getAll();
    res.status(201).send({product:$data})
});

router.put("/",(req,res)=>{
    
});

router.delete("/",(req,res)=>{
    
});

module.exports = router