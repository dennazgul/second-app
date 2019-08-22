const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

const sequelize = require('../server/sequelize');
const jsonData = require('read-write-json');

app.use(bodyParser.json(), cors());



app.post('/', ((req, res) => {
  let smth = req.body.value;
  sequelize.Card.create({ value: smth, columnId: 2}).then(cards => {
    res.send(cards)
  }).catch(error => {
    res.statusCode = 404;
    console.log(error)
    res.send(error);
  })

}))


app.delete('/228/:id', ((req, res) => {
  const id = req.params.id;
  console.log(id)
  sequelize.Card.destroy({
    where: {
      id
    }
  }).then(() => {
    res.send()
  }
  )
}))

sequelize.runSequelize();
app.get('/', ((req, res) => {
  sequelize.Column.findAll().then(cards => {
    res.send(cards)
  }
  )
}));

sequelize.runSequelize();
app.get('/sm', ((req, res) => {
  sequelize.Card.findAll().then(cards => {
    res.send(cards)
  }
  )
}));

app.listen(1488, () => {
  console.log('Example app listening on port 1488!');
}); 