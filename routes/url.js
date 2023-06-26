const express = require('express');
const { hanleGenerateNewShortURL, handleGetAnalytics, handleGetAllURLs, handleGetDailyCount, handleGetMonthlyCount } = require('../controllers/url')
const router = express.Router();
 
router.get('/dailyCount', handleGetDailyCount);
router.get('/monthlyCount', handleGetMonthlyCount);
router.get('/all', handleGetAllURLs);
router.get('/analytics/:shortId', handleGetAnalytics);
router.post('/', hanleGenerateNewShortURL);


module.exports = router;

