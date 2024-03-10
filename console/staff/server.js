const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve your HTML file
app.use(express.static('public'));

app.post('/getInfractionStep', (req, res) => {
  const { staffId } = req.body;

  // Read the infraction step from the text file
  fs.readFile('steps.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading infraction steps');
      return;
    }

    try {
      const steps = JSON.parse(data);
      const infractionStep = steps[staffId] || 0;
      res.json({ infractionStep });
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing infraction steps');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
