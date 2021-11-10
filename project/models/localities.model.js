const { response } = require("express");
const sql = require("./db.js");

const Localities = function (localities) {
  this.name = localities.name;
  this.latitude = localities.latitude;
  this.longitude = localities.longitude;
  this.createdAt = localities.createdAt;
  this.nb_residents = localities.nb_residents;
  this.nb_users = localities.nb_users;
  this.nb_subscriptions = localities.nb_subscriptions;
  this.nb_deposits_cliiink = localities.nb_deposits_cliiink;
  this.nb_total_deposits = localities.nb_total_deposits;
  this.nb_boxes = localities.nb_boxes;
};

Localities.getAll = (result) => {
  sql.query("SELECT * FROM localities", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("candidate: ", res);
    result(null, res);
  });
};

Localities.findById = (localitiesId, result) => {
  sql.query(
    `SELECT * FROM localities WHERE id = ${localitiesId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found candidate: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Candidate with the id
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = Localities;
