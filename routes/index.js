const router= require('express').Router();

const apiRoutes= require('./api');
const homePageRoutes= require('./homepage-routes');
const dashboardRoutes= require('./dashboard-routes');

router.use('/api',apiRoutes);
router.use('/',homePageRoutes);
router.use('/dashboard',dashboardRoutes);

module.exports= router;