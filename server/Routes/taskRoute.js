const express = require('express');
const router = express.Router();
const db = require('../DBConnect');
const { nanoid } = require('nanoid');

// Add Task Route
router.post(`/add`, async (req, res, next) => {
  const { user_id, task_title, task_category } = req.body;

  try {
    if (!user_id || !task_title || !task_category) {
      return next(error);
    } else {
      const date = new Date();
      const id = nanoid(6);
      const values = [id, user_id, task_title, task_category, 'false', date];

      const query = await db.query(
        'INSERT INTO tasks (task_id, user_id, task_title, task_category, is_completed, task_date) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;',
        values
      );

      res.json({ data: query.rows[0] });
    }
  } catch (error) {
    console.log(error);
  }
});

// Get all Tasks by user ID
router.get(`/all/:user_id`, async (req, res, next) => {
  const { user_id } = req.params;

  try {
    const query = await db.query('Select * FROM tasks where user_id = $1', [
      user_id,
    ]);
    res.json({ tasks: query.rows });
  } catch (error) {
    console.log(error);
  }
});

// Toggle Tasks as complete or not
router.patch('/mark_complete', async (req, res, next) => {
  // Values will always be array
  let { data } = req.body;
  let { task_id, bool } = data;

  tasks = task_id.map((item) => `'${item}'`).join(',');

  try {
    const query = await db.query(
      `UPDATE tasks SET is_completed = '${bool}' WHERE task_id IN (${tasks});`
    );
    console.log(query);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;

router.delete('/delete', async (req, res, next) => {
  let { task_id } = req.body;

  try {
    tasks = task_id.map((item) => `'${item}'`).join(',');

    const query = await db.query(
      `DELETE FROM tasks where task_id IN (${tasks})`
    );
    console.log(query);
    res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
});
