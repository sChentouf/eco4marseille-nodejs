const Localities = require("../models/localities.model");

exports.findAll = (req, res) => {
  console.log("hgghg");
  Localities.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Localities.findById(req.body.localitiesId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.body.localitiesId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.body.localitiesId,
        });
      }
    } else res.send(data);
  });
};
