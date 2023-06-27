const  shortid  = require('shortid')
const URL = require('../models/url')

async function hanleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: 'url is required' })
    const shortID = shortid();
    
    await URL.create({
        shortId: shortID,
        user: body.user,
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
  
  async function handleGetAllURLs(req, res) {
    try {
      const allURLs = await URL.find({});
      return res.json({ urls: allURLs });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async function handleGetDailyCount(req, res) {
    try {
      // Get the count for URLs created per day
      const dailyCount = await URL.countDocuments({ createdAt: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) } });
  
      return res.json({ count: dailyCount });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  async function handleGetMonthlyCount(req, res) {
    try {
      // Get the count for URLs created within a month
      const monthlyCount = await URL.countDocuments({ createdAt: { $gte: new Date(new Date().setDate(1)) } });
  
      return res.json({ count: monthlyCount });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  

module.exports = {
    hanleGenerateNewShortURL,
    handleGetAnalytics,
    handleGetAllURLs,
    handleGetDailyCount,
    handleGetMonthlyCount,

}