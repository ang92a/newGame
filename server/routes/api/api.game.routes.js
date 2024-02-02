const router = require("express").Router();
const { Theme, Question, Game, User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const theme = await Theme.findAll({ include: Question });
    const game = await Game.findAll({ where: { user_id: res.locals.user.id } });
    res.json({ theme, game });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/", async (req, res) => {
  const { id, userAnswer, score } = req.body;
  const question = await Question.findOne({ where: { id: id } });
  await Question.update({ status: !status }, { where: { id: id } });

  await Game.create({
    answerUser: userAnswer,
    user_id: res.locals.user.id,
    question_id: id,
  });

  if (question.answer.toLowerCase() === userAnswer.toLowerCase()) {
    const finishScore = question.price + score;

    await User.update(
      { score: finishScore },
      { where: { id: res.locals.user.id } }
    );
    res.json({ message: "успешно", type: "answer", finishScore });
  } else {
    const finishScore = score - question.price;
    await User.update(
      { score: finishScore },
      { where: { id: res.locals.user.id } }
    );
    res.json({ type: "answer", message: "неверно", finishScore });
  }
});

module.exports = router;
