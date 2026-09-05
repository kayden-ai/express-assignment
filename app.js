import express from 'express';

const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/api/v1/cats', (req, res) => {
  const catData = {
    cat_id: 1,
    name: 'Whiskers',
    birthdate: '2006-02-11',
    weight: 62,
    owner: 'Ayush Shah',
    image: 'https://loremflickr.com/320/240/cat',
  };

  res.json(catData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
