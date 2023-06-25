const  shortid  = require('shortid')
const URL = require('../models/url')

async function hanleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: 'url is required' })
    const shortID = shortid();
    
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitedHistory: [],
    })

    return res.json({ id:shortID })
}

async function handleGetAnalytics(req, res) {
    try {
      const shortId = req.params.shortId;
      
      const result = await URL.findOne({ shortId });
      
      if (!result) {
        return res.status(404).json({ error: 'URL not found' });
      }
      
      const totalClicks = result.visitHistory.length;
      const analytics = result.visitHistory;
      
      return res.json({
        totalClicks,
        analytics,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  

module.exports = {
    hanleGenerateNewShortURL,
    handleGetAnalytics,
}