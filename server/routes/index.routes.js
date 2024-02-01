const express = require("express");
const router = express.Router();

const apiAuthRouter = require("./api/api.auth.routes");
const apiUsersRouter = require("./api/api.users.routes");

router.use("/api/auth", apiAuthRouter);
router.use("/api/users", apiUsersRouter);

module.exports = router;
