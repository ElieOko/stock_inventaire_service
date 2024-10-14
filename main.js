const express = require('express');
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const mongo = require("./config/mongo");
const product = require("./src/api/product/api");
const typeProduct = require("./src/api/product/type/api");
const packageProduct = require("./src/api/product/packaging/api");
const defectiveProduct = require("./src/api/product/defective/api");
const stateProduct = require("./src/api/product/state/api")
const stock = require("./src/api/stock/api");
const stockRapport = require("./src/api/stock/rapport/api");
const stockRapportType = require("./src/api/stock/rapport/type/api");
const stockLogIn = require("./src/api/stock/log/in/api");
const stockLogOut = require("./src/api/stock/log/out/api");
const typeStock = require("./src/api/stock/type/api");
const devise = require("./src/api/devise/api");
const inventory = require("./src/api/inventory/api")
// const modelDevise = require("./src/model/devise/devise").state_devise;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(helmet());
app.use("/api/product",product);
app.use("/api/product/type",typeProduct);
app.use("/api/product/defective",defectiveProduct);
app.use("/api/product/package",packageProduct);
app.use("/api/product/state",stateProduct);
app.use("/api/stock",stock);
app.use("/api/stock/type",typeStock);
app.use("/api/stock/log/in",stockLogIn);
app.use("/api/stock/log/out",stockLogOut);
app.use("/api/stock/rapport",stockRapport);
app.use("/api/stock/rapport/type",stockRapportType);
app.use("/api/inventory",inventory);
app.use("/api/devise",devise);
if (app.get("env")==="development") {
    app.use(morgan('tiny'));
}

const port = process.env.PORT || 7000;
app.listen(port,()=> {
    console.log(`Server launch ${port}...`)
});