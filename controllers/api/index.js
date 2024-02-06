const router = require("express").Router();
const homeRoutes = require("./homeRoutes");

router.use("/api", homeRoutes);

module.exports = router;
