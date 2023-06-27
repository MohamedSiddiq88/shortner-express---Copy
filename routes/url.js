const express = require('express');
const { hanleGenerateNewShortURL, handleGetAnalytics, handleGetAllURLs, handleGetDailyCount, handleGetMonthlyCount } = require('../controllers/url')
const router = express.Router();
 
router.post('/dailyCount', handleGetDailyCount);
router.post('/monthlyCount', handleGetMonthlyCount);
router.get('/all', handleGetAllURLs);
router.get('/analytics/:shortId', handleGetAnalytics);
router.post('/', hanleGenerateNewShortURL);


module.exports = router;

