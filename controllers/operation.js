const UserModel = require("../models/User");


const createProduct = async (req, res, next) => {
    console.log('request to add todos...');
    
    const id =req.body.id;
  try {
    const isIdExists = await UserModel.findOne({id});
    if (isIdExists) {
      res.status(404);
      return next(new Error("User already exists"));
    }
    const todo = await UserModel.create(req.body);
    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getProducts = async (req, res, next) => {
    console.log('request to get todos...');
    try{
      const todos = await UserModel.find()
      res.status(200).json({
        success: true,
        todos,
      });
    }catch(error) {
      console.log(error);
      return next(error);
    };
};

const updateItem = async (req, res, next) => {
  console.log('request to update todos...');
  const id = req.body.id;
  const value = req.body.value;
  console.log(value);
  try {
    const todo = await UserModel.findOne({id});
    if (!todo) {
      res.status(404);
      return next(new Error("User not found"));
    }
    const updatedDoc = await UserModel.updateOne({ id: req.body.id }, value)
    res.status(200).json({
      success: true,
      updatedDoc
    });
  } catch(error) {
    console.log(error);
      return next(error);
  }
};

const delete_Item = async (req, res, next) => {
    console.log('request to delete todos...');
    console.log("id",req.body);
    const id =req.body.id;
  try {
    console.log("req.body.id",req.body);
    const user = await UserModel.findOne({id});
    if (!user) {
      res.status(404);
      return next(new Error("User not found"));
    }

    await UserModel.deleteOne({id})

    res.status(200).json({
      success: true,
      message: "User has been deleted.",
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
 
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.delete_Item = delete_Item;
exports.updateItem = updateItem;
