const express = require('express');
const { hanleGenerateNewShortURL, handleGetAnalytics } = require('../controllers/url')
const router = express.Router();
 
router.post('/', hanleGenerateNewShortURL)

router.get('/analytics/:shortId',handleGetAnalytics)

module.exports = router;

