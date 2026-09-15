// server.js
const express = require('express');
const app = express();
const path = require('path');
const { algoritmaSean, algoritmaSeanlvl7, algoritmaNimSumOptimal } = require('./Algoritma-sean.js');

global_var = {
  start : false,
  lvl : -1
}


app.use(function (req, res, next) {
   //res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   //res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, X-PINGOTHER,Access-Control-Request-Method, Access-Control-Request-Headers");
   //res.header("Access-Control-Allow-Headers", "*");
   //res.header("x-frame-options", "SAMEORIGIN");
   res.header("Access-Control-Allow-Methods", "GET,POST");
   res.setHeader('Content-Language', 'en'); // Declare the page's language
  res.setHeader('X-Content-Type-Options', 'nosniff');
   next();
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/public/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json()); // must be included when use post request
app.use(express.urlencoded({ extended: true, limit: '1mb'  })); //must be included when use post request


app.get('/', (req, res) => {
  
  res.render('index', {
    lvl: 0

  });
});

app.get('/game/:lvl', (req, res) => {
  lvl = req.params.lvl  
  global_var.lvl = lvl
  global_var.start = true
  var enemy = {
    1 : "/image/cumis.jpg",
    2 : "/image/pat.png",
    3 : "/image/bot.jpg",
    4 : "/image/bebe.jpg",
    5 : "/image/sukuna.jpg",
    6 : "/image/sean.jpg",
    7 : "/image/devil.png",
    8 : "/image/god_nim.jpg",
  }
  res.render('game', {
    lvl: lvl,
    enemy: enemy[lvl] || "/image/god_nim.jpg" 
  });
});

app.post('/api/get-data-by-algoritma-master', (req, res) => {
  hasil = algoritmaSean(req.body)
  res.send(hasil)
});

app.post('/api/get-data-by-algoritma-master-lvl7', (req, res) => {
  hasil = algoritmaSeanlvl7(req.body)
  res.send(hasil)
});

app.post('/api/get-data-by-algoritma-master-lvl8', (req, res) => {
  hasil = algoritmaNimSumOptimal(req.body)
  res.send(hasil)
});

const PORT = process.env.PORT || 3666;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


