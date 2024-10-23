const viewLoguin = (req, res) => {
  res.render("loguin.ejs");
};

const viewIndex = (req, res) => {
  res.render("inicio.ejs");
};
module.exports = { viewLoguin, viewIndex };
