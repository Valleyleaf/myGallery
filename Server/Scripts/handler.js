const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

app.get('/images', (req, res) => {
  const folderPath = './Server/Merchandise/Art';

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading folder');
    }

    const imageFiles = files.filter(file => {
      const extension = path.extname(file).toLowerCase();
      return extension === '.jpg' || extension === '.jpeg' || extension === '.png';
    });

    res.json(imageFiles);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
