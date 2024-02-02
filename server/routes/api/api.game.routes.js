const router = require("express").Router();
const { Theme, Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const game = await Theme.findAll({ include: Question });
    res.json({ game });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
