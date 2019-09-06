const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

const sequelize = require('../server/sequelize');
const jsonData = require('read-write-json');

app.use(bodyParser.json(), cors());

app.post('/register', ((req, res) => {
  let name = req.body.login;
  let password = req.body.password;
  sequelize.User.create({ name, password, roleId: 1 }).then(user => {
    res.send(user)
    }).catch(error => {
      res.statusCode = 404;
      console.log(error)
      res.send(error);
    })

  }))

app.post('/login', ((req, res) => {
    let name = req.body.login;
    let password = req.body.password;
    sequelize.User.findAll().then(users => {
      const user = users.find((user) => { return user.name == name && user.password == password })
      sequelize.Board.findAll().then(boards => {
        res.send(boards.filter((board) => { return board.userId == user.id }))

      })
    }
    ).catch(error => {
      res.statusCode = 404;
      console.log(error)
      res.send(error);
    })

  }))

app.post('/board', ((req, res) => {
    let name = req.body.name;
    let userId = req.body.userId;
    sequelize.Board.create({ name, userId }).then(board => {
      res.send(board)
    }).catch(error => {
      res.statusCode = 404;
      console.log(error)
      res.send(error);
    })

  }))

app.post('/col', ((req, res) => {
    let name = req.body.name;
    let boardId = req.body.boardId;
    sequelize.Column.create({ name, boardId }).then(cols => {
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
    sequelize.Card.create({ value: value, columnId: colId }).then(cards => {
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


app.get('/board/:userId', ((req, res) => {
    const userId = req.params.userId;
    console.log(userId)
    sequelize.Board.findAll().then(boards => {
      res.send(boards.filter((board) => { return board.userId == userId }))
    }
    )
  }));

app.get('/col/:colId', ((req, res) => {
  const colId = req.params.colId;
  sequelize.Column.findAll().then(columns => {
    res.send(columns.filter((column) => { return column.boardId == colId }))
  }
  )
}));

sequelize.runSequelize();
app.get('/card/:colId', ((req, res) => {
  const colId = req.params.colId;
  sequelize.Card.findAll().then(cards => {
    res.send(cards.filter((card) => { return card.columnId == colId }))
  }
  ).catch(error => {
    res.statusCode = 404;
    console.log(error)
  }
  )
}));

app.listen(1488, () => {
  console.log('Example app listening on port 1488!');
}); 