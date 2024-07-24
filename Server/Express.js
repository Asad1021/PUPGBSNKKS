const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let announcements = [
  { id: 1, text: "Welcome to our new website!" },
  { id: 2, text: "Annual meeting scheduled for next month." }
];

app.get('/announcements', (req, res) => {
  res.json(announcements);
  console.log('Announcements sent');
});

app.post('/announcements', (req, res) => {
  const newAnnouncement = {
    id: announcements.length + 1,
    text: req.body.text
  };
  announcements.push(newAnnouncement);
  res.status(201).json(newAnnouncement);
});

app.delete('/announcements/:id', (req, res) => {
  const id = parseInt(req.params.id);
  announcements = announcements.filter(a => a.id !== id);
  res.status(204).send();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});