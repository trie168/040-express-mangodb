const User = require("../models/user");

module.exports = {
  getAllUser: (req, res) => {
    User.find({}).then(data => res.send(data));
  },

  addUser: async (req, res) => {
    const { name, age } = req.body;
    await User.create({
      name,
      age
    })
      .then(data =>
        res.status(200).send({
          message: "Created new user success",
          data
        })
      )
      .catch(error =>
        res.status(400).send({
          message: "Created new user failed",
          error
        })
      );
  }
};
