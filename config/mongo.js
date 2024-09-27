const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/service_stock_inventaire").then(()=>{
    console.log("CONNECTED");
})
.catch(error=>{
    console.log("NO connected");
});

const devise = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    code :{type:String,default:""},
    symbole:{type:String,default:""},
    taux:{type:Number,default:0.9}
})
const type_in = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
})

const inventory_schema = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
    type_inventory :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "InventoryType"
    }
})

const schema_product = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
    price_wholesale :{type:Number,default:0},
    price_retail:{type:Number,default:0},
    devise:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"Devise"
    },
    type_product :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "TypeProduct"
    },
    packaging:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Packaging"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    is_active : {type:Boolean, default:true},
    date_expiration:{type:Date, default:""},
    date_created : {type:Date,default:Date.now}
})

const defective_schema = new mongoose.Schema({
    user :{
        type :mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    product :{
        type :mongoose.Schema.Types.ObjectId,
        ref :"Product"
    },
    qty:{type:Number, default:0},
    observation :{type:String, default:""},
    date_created : {type:Date,default:Date.now}
})

const packaging_schema = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
})

const state_schema = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
})

const product_type_schema = new mongoose.Schema({
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
})

const stock_in_schema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    stock:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Stock"
    },
    price_unit :{type:Number, default:0},
    qty_in:{type:Number,required:[true,"Le champs `qty` ne doit être vide"]},
    date_creation :{type:Date,default:Date.now},
})

const stock_out_schema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    stock:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Stock"
    },
    qty_out:{type:Number,required:[true,"Le champs `qty_out` ne doit être vide"]},
    price_unit :{type: Number, default:0},
    price_total :{type: Number, default:0},
    date_out :{type:Date,default:Date.now},
})

const rapport_schema = new mongoose.Schema({
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    type_rapport:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "TypeRapport"
    },
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
})

const schema = new mongoose.Schema({
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
})


const stock_type_schema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    name : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs name ne peut-être null"]},
    description :{type:String,default:""},
    is_active :{type:Boolean, default:true}
})

const stock_schema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    type_stock:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "TypeStock"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    qty_int :{type:Number,default:0},
    qty_out :{type:Number,default:0},
    is_active :{type:Boolean, default:true},
    date_created : {type:Date, default:Date.now},
    date_updated : {type:Date, default:Date.now}
})

const user_schema = new mongoose.Schema({
    username : {type:String,unique: true,minlength:1,maxlength:50, required:[true,"Le champs `username` ne peut-être null"]},
    password :{type:String,default:"",required:[true,"Le champs `password` ne peut-être null"]},
})

const rapport = mongoose.model("Rapport",rapport_schema);
const inventory_type = mongoose.model("InventoryType",type_in);
const state_devise = mongoose.model("Devise",devise);
const inventory = mongoose.model("Inventory",inventory_schema);
const product = mongoose.model("Product",schema_product);
const product_defective = mongoose.model("DefectiveProduct",defective_schema);
const product_packaging = mongoose.model("PackagingProduct",packaging_schema);
const product_state = mongoose.model("StateProduct",state_schema);
const product_type = mongoose.model("TypeProduct",product_type_schema);
const stock_log_in = mongoose.model("StockLogIn",stock_in_schema);
const stock_log_out = mongoose.model("StockLogOut",stock_out_schema);
const rapport_type = mongoose.model("TypeRapport",schema);
const stock_type = mongoose.model("TypeStock",stock_type_schema);
const stock = mongoose.model("Stock",stock_schema);
const user = mongoose.model("User",user_schema);
module.exports ={
    mongoose,
    state_devise,
    inventory_type,
    inventory,
    product,
    product_defective,
    product_packaging,
    product_state,
    product_type,
    stock_log_in,
    stock_log_out,
    rapport,
    rapport_type,
    stock_type,
    stock,
    user
};