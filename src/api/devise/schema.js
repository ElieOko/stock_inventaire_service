const joi = require("joi");
const schema = joi.object({
    name : joi.string().min(1).required(),
    code : joi.string(),
    symbole : joi.string(),
    taux : joi.number()
});

module.exports = {
    joi,
    schema
}