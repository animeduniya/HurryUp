const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('HurryUp Backend Running 🚀');
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Milk', price: '₹50' },
    { id: 2, name: 'Bread', price: '₹40' },
    { id: 3, name: 'Eggs', price: '₹60' }
  ]);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
