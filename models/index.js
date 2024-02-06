const router = require('express').Router();
const homeRoutes = require('./api/homeroutes');

router.use('/api', homeRoutes);

module.exports = router;