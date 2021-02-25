const express = require("express");
const app = express();
const uuid = require("uuid").v4;

app.use(express.json());

//fake data:
const todos = [
  {
    name: "chores",
    description: "wash dishes",
    completed: false,
    _id: uuid(),
  },
  {
    name: "activity",
    description: "ski PC",
    completed: false,
    _id: uuid(),
  },
  {
    name: "The name",
    description: "The description of the todo",
    completed: false,
    _id: uuid(),
  },
];

//get list of todos
app.route("/todos")
  .get((req, res) => {
    res.send(todos);
  })
  //add new todos
  .post((req, res, next) => {
    const newTodo = req.body;
    newTodo._id = uuid();
    todos.push(newTodo);
    res.send(`you sent ${newTodo.name} as a new todo`);
  })

//update todo
app.route("/todos/:todoId")
    .put((req, res) => {
  // console.log(req.params.todoId)
    const todoId = req.params.todoId;
    const newTodo = req.body;
    const todosIndex = todos.findIndex((todo) => todo._id === todoId);
    const freshTodo = Object.assign(todos[todosIndex], newTodo);
    res.send(`you have updated ${freshTodo.name} in the database`);
    })
    // delete todo
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send(`you have made a successful delete from your database`)
    })
    // get one 
    // .get((req, res) => {

    // })

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`your express sesrver is running on PORT: ${PORT}!`);
})
