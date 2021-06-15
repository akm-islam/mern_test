// https://www.youtube.com/watch?v=bRRA-SrNyxg
const express = require("express");
const Todo = require("./models/Todo");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect('mongodb://akm:Ma%40142566@3.140.216.86:27017/cool_db',{ useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});
const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  Todo.find((err, todos) => {
    console.log(todos)
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

app.post("/create", (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Todo not found");
    } else {
      todo.text = req.body.text;
      todo
        .save()
        .then((todo) => {
          res.json(todo);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
