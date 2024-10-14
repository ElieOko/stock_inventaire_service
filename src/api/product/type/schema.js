const joi = require("joi");
const schema = joi.object({
    name : joi.string().min(1).required(),
    description : joi.string()
});

module.exports = {
    joi,
    schema
}