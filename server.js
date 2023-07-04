const express = require('express');// back-end server
const path = require('path');// file paths
const { v4: uuidv4 } = require('uuid'); // created unique id's per hit
const fs = require('fs');// reads and writes files

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

let notes = [];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

//save notes
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  notes.push(newNote);
  res.json(newNote);
});

//Delete notes
app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  notes = notes.filter((note) => note.id !== id);
  res.json({ message: 'Note deleted' });
});

//Creates new id per note saved
app.get('/api/uuids', (req, res) => {
  const uuidList = Array.from({ length: 10 }, () => uuidv4());
  const filePath = path.join(__dirname, 'uuids.txt');
  const fileData = uuidList.join('\n');
  
  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.error('Failed to write UUIDs to file:', err);
      res.status(500).json({ message: 'Failed to generate and download UUIDs' });
    } else {
      res.download(filePath, 'uuids.txt', (err) => {
        if (err) {
          console.error('Failed to download UUIDs:', err);
          res.status(500).json({ message: 'Failed to generate and download UUIDs' });
        }
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Failed to delete temporary file:', err);
          }
        });
      });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
