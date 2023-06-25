const express = require('express');
const { hanleGenerateNewShortURL, handleGetAnalytics, handleGetAllURLs } = require('../controllers/url')
const router = express.Router();
 
router.post('/', hanleGenerateNewShortURL)
router.get('/all',handleGetAllURLs)
router.get('/analytics/:shortId',handleGetAnalytics)

module.exports = router;

