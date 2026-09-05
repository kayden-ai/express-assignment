const felineData = [
  {
    cat_id: 101,
    cat_name: 'Luna',
    weight: 4.5,
    owner: 'Daniel Park',
    filename: 'luna_pic_883',
    birthdate: '2023-04-10',
  },
  {
    cat_id: 102,
    cat_name: 'Milo',
    weight: 5.2,
    owner: 'Zack Lee',
    filename: 'milo_pic_992',
    birthdate: '2022-11-22',
  },
];

const fetchAllCats = () => {
  return felineData;
};

const fetchCatById = (id) => {
  return felineData.find((cat) => cat.cat_id == id);
};

const insertCat = (cat) => {
  const {cat_name, weight, owner, filename, birthdate} = cat;
  const newId = felineData[0].cat_id + 1;
  felineData.unshift({
    cat_id: newId,
    cat_name,
    weight,
    owner,
    filename,
    birthdate,
  });
  return {cat_id: newId};
};

export {fetchAllCats, fetchCatById, insertCat};
