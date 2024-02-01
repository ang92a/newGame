const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");
const generateTokens = require("../../utils/authUtils");
const configJWT = require("../../middleware/configJWT");

router.post("/sign-in", async (req, res) => {
  let user;
  try {
    const { name, password } = req.body;

    user = await User.findOne({ where: { name } });
    if (!user) {
      res.json({ message: "Такого пользователя нет или пароль неверный" });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: "Такого пользователя нет или пароль неверный" });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img },
    });

    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    res.json({ message: "успех" });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/sign-up", async (req, res) => {
  let user;
  try {
    const { name, email, img, password, rpassword } = req.body;
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      rpassword.trim() === ""
    ) {
      res.json({ message: "Заполните все поля!" });
      return;
    }
    if (password !== rpassword) {
      res.json({ message: "Пароли не совпадают!" });
      return;
    }
    user = await User.findOne({ where: { name } });
    if (user) {
      res.json({ message: "Такой пользователь уже есть!" });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hash, img });

    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img, email: user.email },
    });

    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    res.json({ message: "успешно" });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.redirect("/");
});

module.exports = router;
