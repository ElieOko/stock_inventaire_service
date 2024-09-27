const model = require("../../../config/mongo").state_devise;

async function create(data) {
    const state = new model(data)
    try {
        const result = await state.save();
        return result
    } catch (error) {
        console.log(error.message); 
    }
    
}
async function update(data,id){
    const state = await model.findByIdAndUpdate(id,{$set:data},{new:true})
    return state
}
async function getAll(){
    const pageNumber = 2;
    const pageSize = 12;
    const data = await model.find()
    .limit(pageSize)
    .sort({nom:1})
    .select({nom:1,level:1});
    return data;
}
async function remove(id){
    const state = await model.findByIdAndDelete(id);
    return state;
}

async function getById(id){
    const state = await model.findById(id);
    return state;
}

module.exports = {
    remove,
    update,
    create,
    getAll,
    getById
};
