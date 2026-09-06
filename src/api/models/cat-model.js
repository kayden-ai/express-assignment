import promisePool from '../../utils/database.js';

const fetchAllCats = async () => {
  const sql = `
    SELECT wsk_cats.*, wsk_users.name AS owner_name 
    FROM wsk_cats 
    JOIN wsk_users ON wsk_cats.owner = wsk_users.user_id
  `;
  const [rows] = await promisePool.query(sql);
  return rows;
};

const fetchCatById = async (id) => {
  const sql = `
    SELECT wsk_cats.*, wsk_users.name AS owner_name 
    FROM wsk_cats 
    JOIN wsk_users ON wsk_cats.owner = wsk_users.user_id 
    WHERE cat_id = ?
  `;
  const [rows] = await promisePool.execute(sql, [id]);

  if (rows.length === 0) {
    return false;
  }
  return rows[0];
};

const insertCat = async (cat) => {
  const {cat_name, weight, owner, filename, birthdate} = cat;
  const sql = `INSERT INTO wsk_cats (cat_name, weight, owner, filename, birthdate) VALUES (?, ?, ?, ?, ?)`;
  const params = [cat_name, weight, owner, filename, birthdate];

  const [rows] = await promisePool.execute(sql, params);

  if (rows.affectedRows === 0) {
    return false;
  }
  return {cat_id: rows.insertId};
};

const modifyCat = async (cat, id) => {
  const sql = promisePool.format(`UPDATE wsk_cats SET ? WHERE cat_id = ?`, [
    cat,
    id,
  ]);
  const [rows] = await promisePool.execute(sql);

  if (rows.affectedRows === 0) {
    return false;
  }
  return {message: 'Cat successfully updated'};
};

const removeCatById = async (id) => {
  const [rows] = await promisePool.execute(
    'DELETE FROM wsk_cats WHERE cat_id = ?',
    [id]
  );

  if (rows.affectedRows === 0) {
    return false;
  }
  return {message: 'Cat successfully deleted'};
};

const fetchCatsByUserId = async (userId) => {
  const sql = `
    SELECT wsk_cats.*, wsk_users.name AS owner_name 
    FROM wsk_cats 
    JOIN wsk_users ON wsk_cats.owner = wsk_users.user_id 
    WHERE owner = ?
  `;
  const [rows] = await promisePool.execute(sql, [userId]);
  return rows;
};

export {
  fetchAllCats,
  fetchCatById,
  insertCat,
  modifyCat,
  removeCatById,
  fetchCatsByUserId,
};
