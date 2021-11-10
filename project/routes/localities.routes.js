module.exports = (app) => {
  const localities = require("../controllers/localities.controllers");

  //Select un candidat par l'id
  app.get("/localities/:localitiesId", (req, res) =>
    localities.findOne(req, res)
  );

  app.get("/local", (req, res) => localities.findAll(req, res));
};
