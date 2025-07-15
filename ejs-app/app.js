const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', user: 'Sidd' });
});

app.get('/profile', (req, res) => {
  const user = {
    name: 'Sidd',
    age: 28,
    hobbies: ['coding', 'gaming', 'reading']
  };
  res.render('profile', { user });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
