const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
    res.send('Server is comming');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find(c => c.id === id) || {};
    res.send(singleCourse);
    console.log(singleCourse)

})


app.listen(port, () => {
    console.log('Server is running', port);
})


