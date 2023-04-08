const { stringify } = require("uuid");
const Category = require("../models/mongoose/Category");

const slugify = require('slugify')

async function  categorCreate(data) {

    const title = data.title;
    // Generate a slug from the title
    const slug = slugify(title, {
      remove: /[*+~.()'"!:@]/g,
      lower: true
    });

    return await Category.create({
        title: title,
        slug: slug
    
      });
}

async function CatrgoryList(req)
{
  let {page = 1, limit} = req.query
  const skip = (page - 1) * limit
  const categories = await Category.find().skip(skip).limit(limit)
  return ({page:page, limit:limit,total: categories.length, categories,})
}

async function getCategoryById(id){
    return await Category.findById(id);
  }

  async function updateCategory(req)
  {
    let { id } = req.params;
    let updateCategory = await Category.findById(id);
    updateCategory.title = req.body.title;
    let slug = req.body.slug
    updateCategory.slug = slugify(slug, {
        remove: /[*+~.()'"!:@]/g,
        lower: true
      });;
    updateCategory.save();
    return updateCategory;
  }

module.exports = {
  categorCreate,
  CatrgoryList,
  getCategoryById,
  updateCategory
};
