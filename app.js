const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Thiết lập EJS làm view engine
app.set('view engine', 'ejs');

// Thiết lập thư mục cho static files
app.use(express.static(path.join(__dirname, 'public')));

// Route chính
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Panorama 360 - NHÀ XE MÁY A1'
  });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
