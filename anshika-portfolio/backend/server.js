const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_DIR = path.join(__dirname, 'data');

app.use(cors());
app.use(express.json());

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

// ---------- GET endpoints: serve resume data ----------

app.get('/api/profile', (req, res) => {
  try {
    res.json(readJSON('profile.json'));
  } catch (err) {
    res.status(500).json({ error: 'Could not load profile data.' });
  }
});

app.get('/api/experience', (req, res) => {
  try {
    res.json(readJSON('experience.json'));
  } catch (err) {
    res.status(500).json({ error: 'Could not load experience data.' });
  }
});

app.get('/api/projects', (req, res) => {
  try {
    res.json(readJSON('projects.json'));
  } catch (err) {
    res.status(500).json({ error: 'Could not load project data.' });
  }
});

app.get('/api/achievements', (req, res) => {
  try {
    res.json(readJSON('achievements.json'));
  } catch (err) {
    res.status(500).json({ error: 'Could not load achievements data.' });
  }
});

app.get('/api/education', (req, res) => {
  try {
    res.json(readJSON('education.json'));
  } catch (err) {
    res.status(500).json({ error: 'Could not load education data.' });
  }
});

// ---------- POST endpoint: contact form ----------

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are all required.' });
  }

  const entry = {
    name,
    email,
    message,
    receivedAt: new Date().toISOString()
  };

  const messagesPath = path.join(DATA_DIR, 'messages.json');
  let existing = [];
  if (fs.existsSync(messagesPath)) {
    existing = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));
  }
  existing.push(entry);
  fs.writeFileSync(messagesPath, JSON.stringify(existing, null, 2));

  res.json({ success: true, message: "Thanks! I'll get back to you soon." });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
