const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

sequelize.sync();

app.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.update(req.body, { where: { id } });
  const updatedProduct = await Product.findByPk(id);
  res.json(updatedProduct);
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
