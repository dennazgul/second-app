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
  sequelize.User.create({ name, password }).then(user => {
    res.send(user)
  }).catch(error => {
    res.send(error);
  })
}))

app.post('/login', ((req, res) => {
  let name = req.body.login;
  let password = req.body.password;
  sequelize.User.findAll().then(users => {
    const user = users.find((user) => { return user.name == name && user.password == password })
    sequelize.BoardOwner.findAll().then(fullBoards => {
      let boardList = fullBoards.filter((fullBoard) => { return fullBoard.userId == user.id })
      sequelize.Board.findAll().then(boards => {
        let userId = user.id;
        let userName = user.name;
        res.send({
          boardList: boards.filter((postBoard) => {
            return (boardList.filter((postBoardOwner) => {
              return (postBoardOwner.boardId == postBoard.id)
            }).length ? true : false)
          }
          ), userId, userName
        })
      })
    }
    )
  }).catch(error => {
    res.statusCode = 404;
    res.send(error);
  })
}))

app.get('/user/:namePart/:userId/:boardId', ((req, res) => {
  const namePart = req.params.namePart;
  const userId = req.params.userId;
  const boardId = req.params.boardId;
  sequelize.User.findAll().then(users => {
    sequelize.BoardOwner.findAll().then(fullBoards => {
      res.send(
        users.filter((user) => { return user.name.indexOf(namePart) ? false : true })
          .filter((user) => { return user.id != userId })
          .filter((user) => { return (fullBoards.filter((fullboard) => { return (fullboard.boardId == boardId && fullboard.userId == user.id) }).length ? false : true) })
      )
    }
    )
  }).catch(error => {
    res.statusCode = 404;
    res.send(error);
  })
}));

app.post('/board', ((req, res) => {
  let name = req.body.name;
  let userId = req.body.userId;
  sequelize.Board.create({ name, userId }).then(board => {
    sequelize.BoardOwner.create({ userId, boardId: board.id }).then(() => {
      res.send(board)
    })
  }).catch(error => {
    res.statusCode = 404;
    res.send(error);
  })
}))

app.post('/shareBoard', ((req, res) => {
  let userId = req.body.sharingUserId;
  let boardId = req.body.boardId;
  sequelize.BoardOwner.create({ userId, boardId }).then(response => {
    res.send(response)
  }).catch(error => {
    res.statusCode = 404;
    res.send(error);
  })
}))

app.delete('/board/:boardId', ((req, res) => {
  let id = req.params.boardId;
  sequelize.Board.destroy({
    where: {
      id
    }
  }).then(() => {
    res.send()
  }
  ).catch(error => {
    res.send(error);
  })
}))

app.delete('/forbidBoardAccess/:sharedUserId/:sharedBoardId', ((req, res) => {
  let userId = req.params.sharedUserId;
  let boardId = req.params.sharedBoardId;
  sequelize.BoardOwner.destroy({
    where: {
      userId,
      boardId
    }
  }).then(() => {
    res.send()
  }
  ).catch(error => {
    res.send(error);
  })
}))

app.delete('/refuseBoardAccess/:sharedUserId/:sharedBoardId', ((req, res) => {
  let userId = req.params.sharedUserId;
  let boardId = req.params.sharedBoardId;
  sequelize.BoardOwner.destroy({
    where: {
      userId,
      boardId
    }
  }).then(() => {
    res.send()
  }
  ).catch(error => {
    res.send(error);
  })
}))

app.get('/column/:boardId', ((req, res) => {
  const boardId = req.params.boardId;
  sequelize.BoardOwner.findAll({ where: { boardId } }).then(fullboards => {
    sequelize.Column.findAll().then(columns => {
      sequelize.Board.findOne({ where: { id: boardId } }).then(board => {
        sequelize.User.findAll().then(users => {
          let columnArray = columns.filter((column) => column.boardId == boardId)
          let boardOwner = users.find(user => user.id == board.userId)
          let sharedUsersArray = users.filter((user) => 
          fullboards.filter((fullboard) => user.id == fullboard.userId ).length ? true : false )
          res.send({ columnArray, boardOwner, sharedUsersArray })
        })
      })
    })
  })
}));

app.post('/column', ((req, res) => {
  let name = req.body.name;
  let creatorId = req.body.creatorId;
  let boardId = req.body.boardId;
  sequelize.Column.create({ name, creatorId, boardId }).then(cols => {
    res.send(cols)
  }).catch(error => {
    res.statusCode = 404;
    res.send(error);
  })
}))

app.delete('/column/:id', ((req, res) => {
  const id = req.params.id;
  sequelize.Column.destroy({
    where: {
      id
    }
  }).then(() => {
    res.send()
  }
  )
}))

app.get('/card/:colId', ((req, res) => {
  const colId = req.params.colId;
  sequelize.Card.findAll().then(cards => {
    res.send(cards.filter((card) => { return card.columnId == colId }))
  }
  ).catch(error => {
    res.statusCode = 404;
  }
  )
}));

app.post('/card', ((req, res) => {
  let value = req.body.value;
  let creatorId = req.body.creatorId;
  let columnId = req.body.colId
  sequelize.Card.create({ value, creatorId, columnId }).then(cards => {
    res.send(cards)
  }).catch(error => {
    res.statusCode = 404;
    res.send(error);
  })

}))

app.delete('/card/:id', ((req, res) => {
  const id = req.params.id;
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

app.listen(1488, () => {
  console.log('Example app listening on port 1488!');
}); 