const express = require('express');
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const mongo = require("./config/mongo");
// const modelDevise = require("./src/model/devise/devise").state_devise;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(helmet());

if (app.get("env")==="development") {
    app.use(morgan('tiny'));
}

const port = process.env.PORT || 3000;
app.listen(port,()=> {
    console.log(`Server launch ${port}...`)
});