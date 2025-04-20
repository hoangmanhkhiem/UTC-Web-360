const express = require('express');
const path = require('path');

const app = express();

// Thiết lập EJS làm view engine
app.set('view engine', 'ejs');

// Thiết lập thư mục cho static files
app.use(express.static(path.join(__dirname, '../public')));

// Thiết lập thư mục views
app.set('views', path.join(__dirname, '../views'));

// Route chính
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Panorama 360 - NHÀ XE MÁY A1'
  });
});

// Nếu là môi trường serverless (Vercel), export app
if (process.env.VERCEL) {
  module.exports = app;
} else {
  // Nếu là môi trường phát triển local, khởi động server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
  });
}
