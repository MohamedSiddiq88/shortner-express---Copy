const express = require('express');
const { hanleGenerateNewShortURL, handleGetAnalytics, handleGetAllURLs, handleGetDailyCount, handleGetMonthlyCount } = require('../controllers/url')
const router = express.Router();
 
app.get('/dailyCount', handleGetDailyCount);
app.get('/monthlyCount', handleGetMonthlyCount);
app.get('/all', handleGetAllURLs);
app.get('/analytics/:shortId', handleGetAnalytics);
app.post('/', hanleGenerateNewShortURL);


module.exports = router;

