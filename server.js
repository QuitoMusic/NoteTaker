const express = require('express');// back-end server
const path = require('path');// file paths
const { v4: uuidv4 } = require('uuid'); // created unique id's per hit
const fs = require('fs');// reads and writes files

const app = express();
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
