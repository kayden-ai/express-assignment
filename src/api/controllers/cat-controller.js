import {insertCat, fetchCatById, fetchAllCats} from '../models/cat-model.js';

const retrieveCats = (req, res) => {
  res.json(fetchAllCats());
};

const retrieveCatById = (req, res) => {
  const foundCat = fetchCatById(req.params.id);
  if (foundCat) {
    res.json(foundCat);
  } else {
    res.sendStatus(404);
  }
};

const createCat = (req, res) => {
  console.log('Form Body:', req.body);
  console.log('Uploaded File:', req.file);

  if (req.file) {
    req.body.filename = req.file.filename;
  }

  const newCat = insertCat(req.body);

  if (newCat.cat_id) {
    res
      .status(201)
      .json({message: 'New cat successfully added.', result: newCat});
  } else {
    res.sendStatus(400);
  }
};

const updateCat = (req, res) => {
  res.json({message: 'Cat item updated.'});
};

const removeCat = (req, res) => {
  res.json({message: 'Cat item deleted.'});
};

export {retrieveCats, retrieveCatById, createCat, updateCat, removeCat};
