const express = require('express');
const cors = require("cors");
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.post("/add", async (req, res) => {
    const requestBody = req.body;
    const parsedBody = createTodo.safeParse(requestBody);
    if (!parsedBody.success) {
        res.status(411).json({
            msg: "Please enter correct todo"
        });
        return;
    }
    await todo.create({
        title: requestBody.title,
        description: requestBody.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})

app.put("/completed", async (req, res) => {
    const updateBody = req.body;
    const parsedUpdateBody = updateTodo.safeParse(updateBody);
    if (!parsedUpdateBody.success) {
        res.status(411).json({
            msg: "Please enter correct id"
        });
        return;
    }
    await todo.findOneAndUpdate({
        _id: updateBody.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    });
})


app.listen(3000);
