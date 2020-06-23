const express = require('express');
const userData = require('./files/user.json');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
      data = userData.sort(function(a, b){
            return(b.points - a.points)
      })
      res.render("index", { data })
})

port = process.env.PORT || 5000;
app.listen(port, () => {
      console.log('App running on port 5000')
});
