const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// Replace 'YOUR_ACCESS_TOKEN' with your actual Vimeo access token
const accessToken = '2b93a83126b1a07f3954c68f43f600fb';

app.get('/api/videos', async (req, res) => {
  const query = req.query.query || 'education';

  try {
    const response = await axios.get('https://api.vimeo.com/videos', {
      params: { query },
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const videos = response.data.data.map(video => ({
      title: video.name,
      link: video.link,
      description: video.description || 'No description available'
    }));

    res.json(videos);
  } catch (error) {
    res.status(500).send('Error fetching videos from Vimeo');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
