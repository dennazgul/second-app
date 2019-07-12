const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');


app.use(bodyParser.json(), cors());

app.get('/', ((req, res) => {
    let gg = {
        name: "fewfewf",
        password: "fefwf"
    }
    res.send(gg.name);
}));


app.post('/register', ((req, res) => {
    console.log(req);
    res.send();
}))

app.listen(1488,  ()=> {
    console.log('Example app listening on port 5000!');
});