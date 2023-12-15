const express = require('express');
const router = express.Router();
const cuid = require('cuid');
const pool = require('../db/db');

router.get('/', async (req, res) => {
  const [children, fields] = await pool.execute('SELECT * FROM child');
  res.status(200).json(children);
});

router.get('/:id', async (req, res) => {
  const [children, fields] = await pool.execute('SELECT * FROM child WHERE id = ?', [req.params.id]);
  if (children.length === 0) return res.status(404).send('Child not found');
  res.status(200).json(children[0]);
});

router.post('/', async (req, res) => {
  const { child_name, date_of_birth, height, weight, gender, head_circumference } = req.body;
  const id = cuid();
  const [children, fields] = await pool.execute('INSERT INTO child (id, child_name, date_of_birth, height, weight, gender, head_circumference) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, child_name, date_of_birth, height, weight, gender, head_circumference]);
  res.status(201).send('Child data created successfully');
});

router.delete('/:id', async (req, res) => {
  const [result, fields] = await pool.execute('DELETE FROM child WHERE id = ?', [req.params.id]);
  if (result.affectedRows === 0) return res.status(404).send('Child not found');
  res.status(200).send('Child deleted successfully');
});

module.exports = router;
