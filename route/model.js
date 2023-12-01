const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pritam17281995:PBPMzLMSU8BZeWKp@reminder.mq3d8f6.mongodb.net/todos_Item?retryWrites=true&w=majority"
);

const UserSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  todo: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: "Daily Snooze",
  },
  time: {
    type: String,
  },
  contact: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const UserModel = mongoose.model("todos", UserSchema);

const createProduct = async (req, res) => {
  const article = new UserModel(req.body);
  try {
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProducts = async (req, res) => {
  UserModel.find({})
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      console.log("error received..", err);
    });
};

const updateItem = async (req, res, next) => {
    console.log('id value update..',req.body);
  const doc = await UserModel.findOne({ id: req.body.id });
  const update = req.body.value;
  try {
    await doc.updateOne(update);
    const updatedDoc = await UserModel.findOne({ id: req.body.id });
    res.json(updatedDoc);
  } catch {
    res.status(500).send(error);
  }
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.updateItem = updateItem;
