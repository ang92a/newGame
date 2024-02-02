const express = require("express");
const router = express.Router();

const apiAuthRouter = require("./api/api.auth.routes");
const apiUsersRouter = require("./api/api.users.routes");
const apiGameRouter = require("./api/api.game.routes");

router.use("/api/auth", apiAuthRouter);
router.use("/api/users", apiUsersRouter);
router.use("/api/game", apiGameRouter);

module.exports = router;
