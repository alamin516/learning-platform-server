const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./Data/courses.json');

app.get('/', (req, res)=>{
    res.send('Server is comming');
})

app.get('/courses', (req, res)=>{
    res.send(courses);
})


app.listen(port, ()=>{
    console.log('Server is running', port);
}) 


