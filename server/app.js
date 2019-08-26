const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

const sequelize = require('../server/sequelize');
const jsonData = require('read-write-json');

app.use(bodyParser.json(), cors());

app.post('/col', ((req, res) => {
  let name = req.body.name;
  sequelize.Column.create({ name}).then(cols => {
    res.send(cols)
  }).catch(error => {
    res.statusCode = 404;
    console.log(error)
    res.send(error);
  })

}))

app.post('/card', ((req, res) => {
  let value = req.body.value;
  let colId = req.body.colId
  sequelize.Card.create({ value: value, columnId: colId}).then(cards => {
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
app.get('/col', ((req, res) => {
  sequelize.Column.findAll().then(cards => {
    res.send(cards)
  }
  )
}));

sequelize.runSequelize();
app.get('/card/:colId', ((req, res) => {
  const colId = req.params.colId;
  sequelize.Card.findAll().then(cards => {
    res.send(cards.filter((card) => {return card.columnId == colId}))
  }
  ).catch(error => {
    res.statusCode = 404;
    console.log(error)}
    )
}));

app.listen(1488, () => {
  console.log('Example app listening on port 1488!');
}); 