const greeting = (req, res) => {
  res.send({ hi: "there" });
};

const createDriver = (req, res) => {
  console.log(req.body);
  res.send({ hi: "there" });
};

module.exports = {
  createDriver,
  greeting,
};
