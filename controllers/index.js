const router = require('express').Router();

// API ROUTES - db/dATA
const apiRoutes = require('./api');
// VIEW/FRONT END ROUTES - html VIEWS
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;