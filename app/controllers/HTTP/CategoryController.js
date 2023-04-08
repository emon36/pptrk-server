const response = require("../../../app/responses/Response");
const Handler = require("../../../app/errors/Handler");
const CategoryService = require("../../services/CategoryService")
const { list } = require("../../permissions/Permission");

module.exports = {

    create : async function (req, res) {
        try{
            const newCategory = await CategoryService.categorCreate({
                title: req.body.title,
            })
            return response.dispatch("Category Created Successfully", {newCategory}, res, 201); // wrap data in object to avoid confusion
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    },

    list : async function(req,res)
    {
        try{
            const categories = await CategoryService.CatrgoryList(req);
            return response.dispatch("Category List", {categories}, res, 200); 
        }catch(error){
            return response.error(Handler(error), res);
        }

    },

    getCategoryById : async function(req, res)
    {
        try {
            const category = await CategoryService.getCategoryById(req.params.id);
            return response.dispatch("Category find successfully", {category}, res, 200); 

        } catch (error) {
            return response.error(Handler(error), res);
        }

    },

    update : async function(req, res)
   
    {
        try {
            const category = await CategoryService.updateCategory(req);
        
            return response.dispatch("Updated Successfully", {category}, res, 200);
        } catch (error) {
            return response.error(Handler(error), res);
        }

    }

}
