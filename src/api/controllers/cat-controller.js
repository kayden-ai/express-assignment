import {
  fetchAllCats,
  fetchCatById,
  insertCat,
  modifyCat,
  removeCatById,
  fetchCatsByUserId,
} from '../models/cat-model.js';

const retrieveCats = async (req, res) => {
  try {
    const cats = await fetchAllCats();
    res.json(cats);
  } catch (error) {
    console.error('Error fetching cats:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

const retrieveCatById = async (req, res) => {
  try {
    const foundCat = await fetchCatById(req.params.id);
    if (foundCat) {
      res.json(foundCat);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Error fetching cat by id:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

const createCat = async (req, res) => {
  try {
    console.log('Form Body:', req.body);
    console.log('Uploaded File:', req.file);

    if (req.file) {
      req.body.filename = req.file.filename;
    }

    const newCat = await insertCat(req.body);

    if (newCat) {
      res
        .status(201)
        .json({message: 'New cat successfully added.', result: newCat});
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.error('Error creating cat:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

const updateCat = async (req, res) => {
  try {
    const result = await modifyCat(req.body, req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.error('Error updating cat:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

const removeCat = async (req, res) => {
  try {
    const result = await removeCatById(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Error removing cat:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

const retrieveCatsByUserId = async (req, res) => {
  try {
    const cats = await fetchCatsByUserId(req.params.id);
    res.json(cats);
  } catch (error) {
    console.error('Error fetching cats by user id:', error);
    res.status(500).json({message: 'Internal server error'});
  }
};

export {
  retrieveCats,
  retrieveCatById,
  createCat,
  updateCat,
  removeCat,
  retrieveCatsByUserId,
};
